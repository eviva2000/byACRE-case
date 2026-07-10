"use client";

import type { MouseEvent, ReactNode } from "react";
import { scrollToModelsSection } from "@/lib/scroll-to-models";

interface ScrollToModelsLinkProps {
  children: ReactNode;
  className: string;
}

export function ScrollToModelsLink({
  children,
  className,
}: ScrollToModelsLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToModelsSection();
  };

  return (
    <a href="#models" className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
