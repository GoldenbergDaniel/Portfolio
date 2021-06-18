import styles from "../../styles/pageStyles/MyProjects.module.scss"

import Heading from "../Heading"

var MyProject = () => {
  return (
    <div id={styles.main}>
      <div id="left"></div>
      <Heading title="My Projects"/>
    </div>
  )
}

export default MyProject
