import React, { Component } from "react"
import styles from "../styles/Navbar.module.scss"

class Navbar extends Component {
  render() {
    return (
      <div id={styles.navbar}>
      <div className={styles.item} id={styles.item}>
          <h1>Daniel Goldenberg</h1>
        </div>
        <div className={styles.item} id={styles.author}>
          <h1>By DanielG</h1>
        </div>
      </div>
    )
  }
}

export default Navbar
