import { useRef } from "react";

export function useRestoreFocus() {
  const ref = useRef<HTMLElement | null>(null);

  function capture() {
    ref.current = document.activeElement as HTMLElement;
  }

  function restore() {
    requestAnimationFrame(() => {
      if (
        ref.current &&
        document.contains(ref.current) &&
        !ref.current.hasAttribute("disabled")
      ) {
        ref.current.focus();
      } else {
        document.body.focus();
      }
    });
  }

  return { capture, restore };
}
