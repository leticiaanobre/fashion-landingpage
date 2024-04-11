import React, { useState } from 'react';
import lady from '../../images/lady.png';
import Linha from '../../images/Linha.png';
import styles from './content.module.css';
import Modal from '../modal/sidemodal';
import DrawerExample from '../drawer/drawer.tsx';
import SlideDrawer from '../side-drawer/side-drawer.js';
import Backdrop from '../side-drawer/backdrop.js';

export default function Content() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [show, setShow] = useState(false);

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const closeModal = () => {
    setShow(false);
  };

  let backdrop;
  if (drawerOpen) {
    backdrop = <Backdrop onClick={closeDrawer} />;
  }

  return (
    <main className={styles.content}>
      <div>
        <img className={styles.imageLinha} src={Linha} alt="" />
      </div>
      <div className={styles.contentText}>
        <h1>Fashion By Jenniffer Tan</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic esse, accusantium dicta ea nisi ad molestiae soluta omnis illo quidem perferendis porro dolore earum vero est itaque, minus cupiditate facilis minima et qui similique. Deleniti, exercitationem. Amet ea aliquid perspiciatis.</p>
        <button className={styles.contentButton} onClick={() => setShow(true)}>collection</button>
        <button className={styles.contentButton} onClick={() => setDrawerOpen(true)}>collection</button>
        <div>
          <SlideDrawer isOpen={drawerOpen} onClose={closeDrawer} />
          {backdrop}
        </div>
      </div>
      <div className={styles.contentImageContainer}>
        <img className={styles.contentImage} src={lady} alt="imagem ilustrativa" />
      </div>
      <DrawerExample />
      <Modal isOpen={show} onClose={closeModal}>
        <h2>Collection</h2>
        <button className={styles.buttonClose} onClick={closeModal}>Cancelar</button>
      </Modal>
    </main>
  );
}
