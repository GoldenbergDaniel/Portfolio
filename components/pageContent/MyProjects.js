import styles from "../../styles/pageStyles/MyProjects.module.scss"

import Heading from "../Heading"
import Project from "../Project"

var MyProject = () => {
  return (
    <div id={styles.main}>
      <div id="left"></div>
      <Heading title="My Projects"/>
      <div id={styles.projects}>
        <Project 
          title="Formula Frenzy" 
          desc="Formula Frenzy is a game we made" 
          technologies={["python", "js", "react.js"]} 
          link="https://github.com/GoldenbergDaniel/FormulaFrenzy"
        />
      </div>
    </div>
  )
}

export default MyProject
