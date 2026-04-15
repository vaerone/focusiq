import React, { useState } from "react";
import { Modal } from "./components/Modal";
import { Menu } from "./components/Menu";
import { useRestoreFocus } from "./hooks/useRestoreFocus";

export default function App() {
  const [open, setOpen] = useState(false);
  const { capture, restore } = useRestoreFocus();

  function openModal() {
    capture();
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    restore();
  }

  return (
    <div style={{ padding: 40 }}>
      <button onClick={openModal}>Open Modal</button>

      <Modal open={open} onClose={closeModal}>
        <input placeholder="Type here..." />
      </Modal>

      <h3>Menu (Roving Tabindex)</h3>
      <Menu items={["Profile", "Settings", "Logout"]} />
    </div>
  );
}
