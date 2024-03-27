import React, { useEffect, useRef } from 'react';
import styles from '../content/content.module.css'

export default function Modal({ isOpen, children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    };
    const dialog = ref.current;
    dialog.showModal();
    dialog.classList.add(styles.modalOpen);
    return () => {
      dialog.close();
    };
  }, [isOpen]);

  const dialogStyles = {
    position: 'fixed',
    top: '0',
    right: '0', 
    transform: 'translate(175%, 0%)', 
    width: '240px', 
    height: '100vh',
    maxHeight: '100vh', 
    overflowY: 'auto',
    border: 'none',
    borderRadius: '0', 
    padding: '2rem',
    backgroundColor: 'white', 
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', 
    transition: '0.3s'
  };

  return <dialog ref={ref} style={dialogStyles}>{children}</dialog>;
}
