import { useRef } from "react";

export function useRestoreFocus() {
  const previousRef = useRef<HTMLElement | null>(null);

  function capture() {
    previousRef.current = document.activeElement as HTMLElement;
  }

  function restore() {
    requestAnimationFrame(() => {
      previousRef.current?.focus();
    });
  }

  return { capture, restore };
}
