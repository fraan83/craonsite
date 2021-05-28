import Link from 'next/link'
import React from "react";
import classes from "styles/Servizi.module.scss";
import Title from "components/title/Title";
import Menu from "components/menu/Menu";
import Image from 'next/image';
import Footer from "components/footer/Footer";
import HeaderPaginaInterna from 'components/header-pagina-interna/header-pagina-interna';
import B2Button from 'components/buttons/B2Button';
import Head from 'next/head';
import ServiziSection from 'components/sections/ServiziSection';
const Servizi_SystemIntegration = () => {
  const goToB2B = () => {
    alert("clicked");
  };

  return (
    <div className="internaContainer" >
      <Head>
        <title> Craon - System Integration </title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta property="og:title" content="Craon Srl" key="title" />
        <meta name="description" content="Craon System Integration. " />
        <script src="https://kit.fontawesome.com/f9028cf83e.js" crossorigin="anonymous"></script>
      </Head>
      <Menu activeElement={"servizi"} pagInterna={true} />
      <Link href={{ pathname: '/', query: { section: 'chisiamo' } }}><a>path</a></Link>
      <section className={`section ${classes.section} `} >
        <HeaderPaginaInterna title="System Integration "
          subtitle="Sottotitolo System Integration." />
        <div className={classes.content}>

          <div className={classes.pageElements}>
            <div className={classes.defImage}>
              <Image src="/servizi/system_integration_mc.png" width={450} height={319} alt="image" />
            </div>
            <div className={classes.text}>
              <strong>Curabitur arcu erat</strong>, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Vestibulum</strong> ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.<br /><br /> <strong>Nulla porttitor accumsan tincidunt</strong>. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque.Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh.
              </div>
          </div>

          <div className={classes.content}>
            <div className={classes.headrb2b}>
              <h1>Un sito e-commerce efficiente che si adatta perfettamente alla vendita B2B</h1>
            </div>
            <div className={classes.contentb2b}>
              <div className={classes.columnb2b}>
                <h2> Prodotto E-commerce 1 </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={classes.columnb2b}>
                <h2> Prodotto E-commerce 2 </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={classes.columnb2b}>
                <h2> Prodotto E-commerce 3 </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={classes.columnb2b}>
                <h2> Prodotto E-commerce 4 </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
            </div>
            <div className={classes.bottomB2b}>
              <B2Button onClick={goToB2B}/>
            </div>


          </div>
        </div>
        <ServiziSection></ServiziSection>
      </section>
      <Footer pagInterna={true} />
    </div>

  );
};

export default Servizi_SystemIntegration;
