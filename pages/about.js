import Head from "next/head"

import Navbar from "../components/Navbar"
import Heading from "../components/Heading"
import AboutMe from "../components/AboutMe"
import Metadata from "../components/Metadata"

export default function Home() {
  return (
    <div id="main">
      <Head>
        <title>Daniel Goldenberg</title>
        <link rel="icon" href="/favicon.ico" />
        <Metadata/>
      </Head>
      <Navbar current="about"/>
      <Heading title="About Me"/>
      <AboutMe/>
    </div>
  )
}
