import Head from "next/head"

import Navbar from "../components/Navbar"
import Heading from "../components/Heading"
import Metadata from "../components/Metadata"

export default function Home() {
  return (
    <div id="main">
      <Head>
        <title>Daniel Goldenberg</title>
        <link rel="icon" href="/favicon.ico" />
        <Metadata/>
      </Head>
      <Navbar current="null"/>
      <div id="container-main">
        <Heading title="Welcome to Daniel's Portfolio"/>
      </div>
    </div>
  )
}
