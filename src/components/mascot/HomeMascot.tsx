"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Mascot = dynamic(() => import("./Mascot").then((m) => m.Mascot), { ssr: false });

export function HomeMascot() {
  const [size, setSize] = useState(120);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setSize(mq.matches ? 96 : 120);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return <Mascot size={size} />;
}
