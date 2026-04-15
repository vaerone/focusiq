import React, { useState } from "react";
import { Modal } from "./components/Modal";
import { Menu } from "./components/Menu";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 40 }}>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <input placeholder="Type here..." />
      </Modal>

      <h3>Menu (Roving Tabindex)</h3>
      <Menu items={["Profile", "Settings", "Logout"]} />
    </div>
  );
}
