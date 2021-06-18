import React from 'react'
import styles from "../styles/NavbarRoute.module.scss"

var NavbarRoute = (props) => {
  return (
    <div id={styles.main}>
      <a href={props.path}>
        <h1 id={props.current == true ? styles.current : styles.default}>{props.name}</h1>
      </a>
    </div>
  )
}

export default NavbarRoute
