import React, { useEffect, useRef } from 'react';import styles from '../styles/tableCard.module.css'

export default function SideModal({ isOpen, children }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current!;
    dialog.showModal();
    dialog.classList.add(styles.modalOpen);
    return () => {
      dialog.close();
    };
  }, [isOpen]);

  const dialogStyles: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '800px',
    maxHeight: '80vh',
    overflowY: 'auto',
    border: 'none',
    borderRadius: '12px',
    padding: '2rem',
  };

  return <dialog ref={ref} style={dialogStyles}>{children}</dialog>;
}