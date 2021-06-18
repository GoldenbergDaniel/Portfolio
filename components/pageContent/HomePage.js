import styles from "../../styles/pageStyles/HomePage.module.scss"

import Heading from "../Heading"

var HomePage = () => {
  return (
    <div id={styles.main}>
      <div id="left"></div>
      <div id={styles.headingContainer}>
        <div className={styles.container}>
          <Heading title="Daniel Goldenberg's Portfolio"/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
