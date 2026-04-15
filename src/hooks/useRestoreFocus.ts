import { useEffect, useRef } from "react";

export function useRestoreFocus(isActive: boolean) {
  const previousRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isActive) {
      previousRef.current = document.activeElement as HTMLElement;
    } else {
      previousRef.current?.focus();
    }
  }, [isActive]);
}
