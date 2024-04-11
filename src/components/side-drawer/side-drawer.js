import React from 'react';
import styles from './side-drawer.module.css';

export default function SlideDrawer({ isOpen, onClose }) {
    let drawerClasses = styles['side-drawer'];
    if (isOpen) {
        drawerClasses = `${styles['side-drawer']} ${styles['open']}`;
    }
    return (
        <div className={drawerClasses}>
            <h1>Hello, I'm sliding!</h1>
            <button onClick={onClose}>Cancelar</button>
        </div>
    );
}
