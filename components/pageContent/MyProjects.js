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
          title="Speedrun Game" 
          desc="A pixel art game written in C with raylib" 
          technologies={["c", "raylib"]} 
          link="https://github.com/GoldenbergDaniel/SpeedrunGame"
        />
        <Project 
          title="Formula Frenzy" 
          desc="A mental regression math game" 
          technologies={["react.js", "python"]} 
          link="https://github.com/GoldenbergDaniel/FormulaFrenzy"
        />
        <Project 
          title="Textify" 
          desc="A webapp for parsing custom acronyms " 
          technologies={["html/css", "js", "go"]} 
          link="https://github.com/GoldenbergDaniel/Textify"
        />
      </div>
    </div>
  )
}

export default MyProject
