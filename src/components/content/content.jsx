import React from 'react'
import lady from '../../images/lady.png'
import Linha from '../../images/Linha.png'
import styles from './content.module.css'

export default function Content() {
  return (
    <main className={styles.content}>
        <div>
            <img className={styles.imageLinha} src={Linha} alt="" />
        </div>
        <div className={styles.contentText}>
            <h1>Fashion By Jenniffer Tan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic esse, accusantium dicta ea nisi ad molestiae soluta omnis illo quidem perferendis porro dolore earum vero est itaque, minus cupiditate facilis minima et qui similique. Deleniti, exercitationem. Amet ea aliquid perspiciatis.</p>
            <button className={styles.contentButton}>collection</button>
        </div>
        <div className={styles.contentImageContainer}>
            <img className={styles.contentImage} src={lady} alt="imagem ilustrativa" />
        </div>
    </main>
  )
}
