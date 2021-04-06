import Head from "next/head"

import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div id="main">
      <Head>
        <title>Daniel G</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
    </div>
  )
}
