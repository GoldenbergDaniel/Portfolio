import styles from "../../styles/pageStyles/MyResume.module.scss"

import Heading from "../Heading"

var MyResume = () => {
  return (
    <div id={styles.main}>
      <div id="left"></div>
      <Heading title="My Resume"/>
    </div>
  )
}

export default MyResume
