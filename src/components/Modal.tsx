import React, { useLayoutEffect, useRef } from "react";
import { useFocusTrap } from "../hooks/useFocusTrap";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ open, onClose, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useFocusTrap({ containerRef: ref, isActive: open });

  useLayoutEffect(() => {
    if (open) {
      ref.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={{ background: "white", padding: 20, borderRadius: 8 }}
      >
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
