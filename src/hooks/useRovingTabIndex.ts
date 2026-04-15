import { useEffect, useRef, useState } from "react";

export function useRovingTabIndex(length: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<HTMLElement[]>([]);

  function register(el: HTMLElement | null, index: number) {
    if (el) refs.current[index] = el;
  }

  useEffect(() => {
    refs.current[activeIndex]?.focus();
  }, [activeIndex]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % length);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + length) % length);
    }
  }

  function getTabIndex(index: number) {
    return index === activeIndex ? 0 : -1;
  }

  return { register, onKeyDown, getTabIndex, activeIndex };
}
