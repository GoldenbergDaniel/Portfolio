import React from "react"
import styles from "../styles/Navbar.module.scss"

import NavbarRoute from "./NavbarRoute"

var Navbar = (props) => {
  return (
    <div id={styles.navbar}>
      <a href="/">
        <div>
          <h1 id={styles.name}>Daniel Goldenberg</h1>
        </div>
      </a>
      <div id={styles.routes}>
        <NavbarRoute name="About" path="/about" current={props.current == "about" ? true : false}></NavbarRoute>
        <NavbarRoute name="Projects" path="/projects" current={props.current == "projects" ? true : false}></NavbarRoute>
        <NavbarRoute name="Resume" path="/resume" current={props.current == "resume" ? true : false}></NavbarRoute>
      </div>
    </div>
  )
}

export default Navbar
