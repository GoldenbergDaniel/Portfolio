import styles from "../../styles/pageStyles/Projects.module.scss"

import Head from "next/head"

import Heading from "../../components/Heading"
import Project from "../../components/Project"
import Navbar from "../../components/Navbar"

import favicon from "../../public/favicon.png"

export default function Home() {
  let page = "projects"
  return (
    <div id="main">
      <Head>
        <title>My Projects</title>
        <link rel="icon" href={favicon} />
        <meta property="og:title" content="Daniel Goldenberg's Projects"></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:country-name" content="United States"></meta>
        <meta property="og:description" content="My name is Daniel Goldenberg and I'm a student and software developer based in Miami, Florida."></meta>
        <meta property="og:site_name" content="Daniel Goldenberg"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:brand" content="D4NI3L"></meta>
        <meta name="theme-color" content="#52a2f1"></meta>
        <meta name="subject" content="Daniel Goldenberg Portfolio Site"></meta>
        <meta name="topic" content="Daniel Goldenberg"></meta>
        <meta name="designer" content="Daniel Goldenberg"></meta>
        <meta name="copyright" content="Daniel Goldenberg"></meta>
        <meta name="owner" content="Daniel Goldenberg"></meta>
        <meta name="description" content="My name is Daniel Goldenberg and I'm a student and software developer based in Miami, Florida."></meta>
        <meta name="keywords" content="Daniel Goldenberg, Daniel Goldenberg developer, Daniel Goldenberg programming, Daniel Goldenberg projects, DanielG"></meta>
        <meta name="addsearch-category" content="Daniel Goldenberg"></meta>
        <meta name="publisher" content="www.github.com/GoldenbergDaniel"></meta>
      </Head>
      <Navbar current={page}/>
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
          <Project 
            title="SchoolStuff App" 
            desc="FBLA app for managing school stuff" 
            technologies={["react.js", "go"]} 
            link="https://github.com/nonagaga/SchoolApp-Client"
          />
        </div>
      </div>
    </div>
  )
}
