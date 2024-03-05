import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, className = "", open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, []);

  return createPortal(
    <dialog
      open={open}
      ref={dialog}
      className={`modal ${className}`}
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
