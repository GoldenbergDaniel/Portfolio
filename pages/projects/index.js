import Head from "next/head"

import Navbar from "../../components/Navbar"

export default function Home() {
  return (
    <div id="main">
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
    </div>
  )
}
