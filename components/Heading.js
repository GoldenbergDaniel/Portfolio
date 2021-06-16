import React from "react"
import styles from "../styles/Heading.module.scss"

var Heading = (props) => {
  return (
    <div id={styles.heading}>
      <h1>{props.title}</h1>
    </div>
  )
}

export default Heading
