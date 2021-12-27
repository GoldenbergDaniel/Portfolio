import styles from "../styles/Navbar.module.scss"

import NavbarRoute from "./NavbarRoute"

var Navbar = (props) => {
  return (
    <div id={styles.main}>
      <a href="/" id={styles.name}>
        <h1>DANIEL GOLDENBERG</h1>
      </a>
      <div id={styles.routes}>
        <NavbarRoute name="ABOUT" path="/about" current={props.current == "about" ? true : false}></NavbarRoute>
        <NavbarRoute name="PROJECTS" path="/projects" current={props.current == "projects" ? true : false}></NavbarRoute>
        <NavbarRoute name="BLOG" path="/blog" current={props.current == "blog" ? true : false}></NavbarRoute>
        <NavbarRoute name="CONTACT" path="/contact" current={props.current == "contact" ? true : false}></NavbarRoute>
      </div>
    </div>
  )
}

export default Navbar
