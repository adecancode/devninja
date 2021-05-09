import 'tailwindcss/tailwind.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
          rel="stylesheet"
        />
        <title>Ade / Front End & Mobile Developer</title>
        <meta name="description" content="Ade's Portfolio" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
