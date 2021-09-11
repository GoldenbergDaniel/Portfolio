import Head from "next/head"

import Navbar from "../components/Navbar"
import AboutMe from "../components/pageContent/AboutMe"

import favicon from "../public/favicon.png"

export default function Home() {
  let page = "about"
  return (
    <div id="main">
      <Head>
        <title>About Me </title>
        <link rel="icon" href={favicon} />
        <meta property="og:title" content="About Daniel Goldenberg"></meta>
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
      <AboutMe/>
    </div>
  )
}
