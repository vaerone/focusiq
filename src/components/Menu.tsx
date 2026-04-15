import React from "react";
import { useRovingTabIndex } from "../hooks/useRovingTabIndex";

export function Menu({ items }: { items: string[] }) {
  const { register, onKeyDown, getTabIndex } = useRovingTabIndex(items.length);

  return (
    <div role="menu" onKeyDown={onKeyDown}>
      {items.map((item, i) => (
        <div
          key={item}
          role="menuitem"
          ref={(el) => register(el, i)}
          tabIndex={getTabIndex(i)}
          style={{ padding: 8 }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
