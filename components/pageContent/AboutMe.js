import styles from "../../styles/pageStyles/AboutMe.module.scss"

import Heading from "../Heading"

import myPhoto from "../../public/images/photo.jpeg"

var AboutMe = () => {
  return (
    <div id={styles.main}>
      <div id="left"></div>
      <div id={styles.headingContainer}>
        <div className={styles.container}>
          <Heading title="About Me"/>
        </div>
      </div>
      <div id={styles.contentContainer}>
        <div id={styles.photo} className={styles.container}>
          <img src={myPhoto} alt="Daniel Goldenberg"/>
        </div>
        <div id={styles.description} className={styles.container}>
          <p>My name is <span>Daniel Goldenberg</span> and I'm a student and developer based in Winter Park, Florida. I'm mainly interested in low-level simulation development, embedded, and machine learning. Additionally, I enjoy physics, economics, and Jiu-Jitsu and MMA.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
