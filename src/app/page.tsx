import { Suspense } from "react";
import { PortfolioApp } from "@/components/PortfolioApp";

export default function Home() {
  return (
    <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading...</div>}>
      <PortfolioApp />
    </Suspense>
  );
}
