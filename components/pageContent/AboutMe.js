import styles from "../../styles/pageStyles/AboutMe.module.scss"

import Heading from "../Heading"

import myPhoto from "../../public/images/photo.jpeg"

var AboutMe = () => {
  return (
    <div id={styles.aboutMe}>
      <div id="left"></div>
      <Heading title="About Me"/>
      <div id={styles.content}>
        <div id={styles.photo} className={styles.container}>
          <img src={myPhoto} alt="Daniel Goldenberg"/>
        </div>
        <div id={styles.description} className={styles.container}>
          <p>My name is Daniel Goldenberg and I'm a student and software developer based in Miami, Florida. I'm mainly interested in low-level simulation development, embedded, and machine learning. Additionally, I enjoy physics, economics, and Jiu-Jitsu and MMA.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
