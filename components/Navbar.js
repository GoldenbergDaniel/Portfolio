import styles from "../styles/Navbar.module.scss"

import NavbarRoute from "./NavbarRoute"

var Navbar = (props) => {
  return (
    <div id={styles.navbar}>
      <a href="/" id={styles.name}>
        <h1>Daniel Goldenberg</h1>
      </a>
      <div id={styles.routes}>
        <NavbarRoute name="About" path="/about" current={props.current == "about" ? true : false}></NavbarRoute>
        <NavbarRoute name="Projects" path="/projects" current={props.current == "projects" ? true : false}></NavbarRoute>
        <NavbarRoute name="Resume" path="/resume" current={props.current == "resume" ? true : false}></NavbarRoute>
        <NavbarRoute name="Contact" path="/contact" current={props.current == "contact" ? true : false}></NavbarRoute>
      </div>
    </div>
  )
}

export default Navbar
