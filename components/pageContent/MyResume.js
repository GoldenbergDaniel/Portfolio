import styles from "../../styles/pageStyles/MyResume.module.scss"

import Heading from "../Heading"

var MyResume = () => {
  return (
    <div id={styles.aboutMe}>
      <div id="left"></div>
      <Heading title="My Resume"/>
      <div id={styles.content}>
      </div>
    </div>
  )
}

export default MyResume
