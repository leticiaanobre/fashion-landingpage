import React from 'react'
import styles from './backdrop.module.css'
export default class Backdrop extends React.Component {
  render(){
    return(
      <div className={styles.backdrop} />
    )
  }
}