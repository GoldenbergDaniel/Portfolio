import styles from "../../styles/pageStyles/ContactMe.module.scss"

import Heading from "../Heading"

var ContactMe = () => {
  return (
    <div id={styles.main}>
      <div id="left"></div>
      <div id={styles.headingContainer}>
        <div className={styles.container}>
          <Heading title="Contact Me"/>
        </div>
      </div>
    </div>
  )
}

export default ContactMe