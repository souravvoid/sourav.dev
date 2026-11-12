"use client";

import { useEffect, useRef } from "react";

type Options = {
  enabled: boolean;
  reducedMotion: boolean;
  headRef: React.RefObject<SVGGElement | null>;
  leftPupilRef: React.RefObject<SVGCircleElement | null>;
  rightPupilRef: React.RefObject<SVGCircleElement | null>;
};

const MAX_ANGLE = 14; // degrees
const DEAD_ZONE = 90; // px from mascot center
const LERP = 0.14;

export function useMascotTracking({
  enabled,
  reducedMotion,
  headRef,
  leftPupilRef,
  rightPupilRef,
}: Options) {
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (reducedMotion || !enabled) {
      // reset
      target.current = { x: 0, y: 0 };
      return;
    }

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * LERP;
      current.current.y += (target.current.y - current.current.y) * LERP;
      const { x, y } = current.current;
      if (headRef.current) {
        headRef.current.style.transform = `rotate(${x * 0.4}deg) translate(${x * 0.15}px, ${y * 0.15}px)`;
      }
      const px = x * 0.35;
      const py = y * 0.35;
      if (leftPupilRef.current) {
        leftPupilRef.current.style.transform = `translate(${px}px, ${py}px)`;
      }
      if (rightPupilRef.current) {
        rightPupilRef.current.style.transform = `translate(${px}px, ${py}px)`;
      }

      const settled =
        Math.abs(current.current.x - target.current.x) < 0.05 &&
        Math.abs(current.current.y - target.current.y) < 0.05 &&
        Math.abs(target.current.x) < 0.01 &&
        Math.abs(target.current.y) < 0.01;
      if (settled) {
        current.current = { x: 0, y: 0 };
        if (headRef.current) headRef.current.style.transform = "";
        if (leftPupilRef.current) leftPupilRef.current.style.transform = "";
        if (rightPupilRef.current) rightPupilRef.current.style.transform = "";
        raf.current = null;
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const el = headRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < DEAD_ZONE) {
        target.current = { x: 0, y: 0 };
      } else {
        const angle = Math.atan2(dy, dx);
        const clamped = Math.min(1, (dist - DEAD_ZONE) / 220);
        target.current = {
          x: Math.cos(angle) * MAX_ANGLE * clamped,
          y: Math.sin(angle) * MAX_ANGLE * clamped,
        };
      }
      if (raf.current === null) {
        raf.current = requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      target.current = { x: 0, y: 0 };
      if (raf.current === null) {
        raf.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
      raf.current = null;
    };
  }, [enabled, reducedMotion, headRef, leftPupilRef, rightPupilRef]);
}
