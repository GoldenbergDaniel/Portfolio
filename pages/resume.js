import Head from "next/head"

import Navbar from "../components/Navbar"
import Heading from "../components/Heading"

export default function Home() {
  return (
    <div id="main">
      <Head>
        <title>Daniel Goldenberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar current="resume"/>
      <Heading title="My Resume"/>
    </div>
  )
}
