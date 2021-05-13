import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import MainPage from "pages/MainPage" 

export default function Home() {
  return (
    <div className="siteContainer">
         <Head>
            <title>Craon</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />    
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
          </Head>
          <MainPage />
          {/* <h1 className="title">
            Read{' '}
            <Link href="/assistenza">
              <a>this page!</a>
            </Link>
          </h1>
          <Image 
            src="/bg_home.jpg" // Route of the image file 
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
          /> */}
    </div>
  )
}
