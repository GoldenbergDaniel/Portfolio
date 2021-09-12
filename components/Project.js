import React from "react"
import styles from "../styles/Project.module.scss"

var Project = (props) => {
  return (
    <div id={styles.main}>
      <div id={styles.title} className={styles.container}>
        <h1>{props.title}</h1>
      </div>
      <div id={styles.photo} className={styles.container}>
        <img src={props.image} alt="Screenshot of project"/>
      </div>
      <div id={styles.technologies} className={styles.container}>
        <ul>
          {props.technologies.map(technology => <li>{technology}</li>)}
        </ul>
      </div>
      <div id={styles.desc} className={styles.container}>
        <p>{props.desc}</p>
      </div>
      <div id={styles.link} className={styles.container}>
        <a href={props.link} target="_blank"><span>Code</span></a>
      </div>
    </div>
  )
}

export default Project
