import Head from "next/head"

import Heading from "../../components/Heading"
import Navbar from "../../components/Navbar"

export default function Home() {
  return (
    <div id="main">
      <Head>
        <title>Daniel Goldenberg</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar current="projects"/>
      <Heading title="My Projects"/>
    </div>
  )
}
