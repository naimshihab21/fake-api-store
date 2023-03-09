import Head from "next/head"

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Fake API product store. I just learn for increasing my skill." />
      </Head>
      { children }
    </>
  )
}

export default Layout