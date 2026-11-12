"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useMascotTracking } from "./useMascotTracking";

type MascotProps = {
  size?: number;
  enabled?: boolean;
  onReact?: () => void;
};

export function Mascot({ size = 140, enabled = true, onReact }: MascotProps) {
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const [reacting, setReacting] = useState(false);
  const headRef = useRef<SVGGElement>(null);
  const leftPupilRef = useRef<SVGCircleElement>(null);
  const rightPupilRef = useRef<SVGCircleElement>(null);
  const reactTimer = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useMascotTracking({ enabled, reducedMotion, headRef, leftPupilRef, rightPupilRef });

  const react = useCallback(() => {
    setReacting(true);
    onReact?.();
    if (reactTimer.current !== null) window.clearTimeout(reactTimer.current);
    reactTimer.current = window.setTimeout(() => setReacting(false), 700);
  }, [onReact]);

  useEffect(() => {
    return () => {
      if (reactTimer.current !== null) window.clearTimeout(reactTimer.current);
    };
  }, []);

  const eyeScale = reacting ? 1.15 : 1;

  return (
    <div
      className="mascot-root"
      style={{ width: size, height: size }}
      aria-label="Interactive mascot character"
      role="img"
    >
      <svg
        viewBox="0 0 140 140"
        width={size}
        height={size}
        className={reacting ? "mascot-squash" : "mascot-breathe"}
        onClick={react}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            react();
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="Mascot — click to react"
        style={{ cursor: "pointer", outline: "none" }}
      >
        {/* ears */}
        <polygon points="30,55 44,20 58,55" fill="#f97316" stroke="#7c2d12" strokeWidth="2" />
        <polygon points="82,55 96,20 110,55" fill="#f97316" stroke="#7c2d12" strokeWidth="2" />
        <polygon points="36,52 44,30 52,52" fill="#fed7aa" />
        <polygon points="88,52 96,30 104,52" fill="#fed7aa" />

        <g ref={headRef} style={{ transformOrigin: "70px 78px" }}>
          {/* head */}
          <ellipse cx="70" cy="78" rx="46" ry="42" fill="#f97316" stroke="#7c2d12" strokeWidth="2" />
          {/* muzzle */}
          <ellipse cx="70" cy="90" rx="20" ry="14" fill="#fed7aa" />

          {/* eyes */}
          <g style={{ transform: `scale(${eyeScale})`, transformOrigin: "52px 72px" }}>
            <ellipse className="mascot-eye" cx="52" cy="72" rx="9" ry={reacting ? 10 : 11} fill="#fff" stroke="#7c2d12" strokeWidth="1.5" />
            <circle ref={leftPupilRef} cx="52" cy="74" r="5" fill="#1f2937" />
            <circle cx="50" cy="71" r="1.6" fill="#fff" />
          </g>
          <g style={{ transform: `scale(${eyeScale})`, transformOrigin: "88px 72px" }}>
            <ellipse className="mascot-eye" cx="88" cy="72" rx="9" ry={reacting ? 10 : 11} fill="#fff" stroke="#7c2d12" strokeWidth="1.5" />
            <circle ref={rightPupilRef} cx="88" cy="74" r="5" fill="#1f2937" />
            <circle cx="86" cy="71" r="1.6" fill="#fff" />
          </g>

          {/* nose */}
          <polygon points="66,86 74,86 70,92" fill="#7c2d12" />
          {/* mouth */}
          {reacting ? (
            <path d="M60,96 Q70,104 80,96" stroke="#7c2d12" strokeWidth="2" fill="none" strokeLinecap="round" />
          ) : (
            <path d="M64,96 Q70,100 76,96" stroke="#7c2d12" strokeWidth="2" fill="none" strokeLinecap="round" />
          )}

          {/* cheeks */}
          <circle cx="40" cy="86" r="5" fill="#fca5a5" opacity="0.5" />
          <circle cx="100" cy="86" r="5" fill="#fca5a5" opacity="0.5" />
        </g>
      </svg>

      <style jsx>{`
        .mascot-root { position: fixed; bottom: 16px; right: 16px; z-index: 40; pointer-events: none; }
        .mascot-root svg { pointer-events: auto; }
        .mascot-breathe { animation: mascot-breathe 3.2s ease-in-out infinite; }
        .mascot-squash { animation: mascot-squash 0.7s ease; }
        .mascot-eye { transform-box: fill-box; transform-origin: center; animation: mascot-blink 4s ease-in-out infinite; }
        @keyframes mascot-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes mascot-squash {
          0% { transform: scale(1); }
          30% { transform: scale(1.12, 0.88); }
          60% { transform: scale(0.94, 1.06); }
          100% { transform: scale(1); }
        }
        @keyframes mascot-blink {
          0%, 42%, 58%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mascot-breathe, .mascot-squash, .mascot-eye { animation: none; }
        }
      `}</style>
    </div>
  );
}
