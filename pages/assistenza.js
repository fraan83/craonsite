import Link from 'next/link'
import React from "react";
import classes from "../styles/AssistenzaPage.module.scss";
import Title from "components/title/Title";
import Subtitle from 'components/subtitle/subtitle';
import Menu from "components/menu/Menu";
import Image from 'next/image';
import Footer from "components/footer/Footer";

import HeaderPaginaInterna from 'components/header-pagina-interna/header-pagina-interna';
import FormAssistenza from 'components/form-assistenza/form-assistenza';
import Button from 'components/buttons/Button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Head from 'next/head';

const Assistenza = () => {
  const handler = () => {
    alert("clicked");
  };


  const linkTmWin = () => {
    window.open("http://eventi.elmec.com/docscaricabili/TeamViewerQS_it-idcz23w425.exe");
  }
  const linkTmMac = () => {
    window.open("http://eventi.elmec.com/docscaricabili/TeamViewerQS-2.zip");
  }

  return (


    <div className="internaContainer" >

      <Head>
        <title> Assistenza Tecnica - Craon </title>
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
        <meta property="og:title" content="Craon Srl Assistenza Tecnica" key="title" />
        <meta name="description" content="Craon Assistenza tecnica per i sistemi ed i software sviluppati da Craon. Telefono Tel. +39 039.6612489 E-mail: info@craon.it " />
        <script src="https://kit.fontawesome.com/f9028cf83e.js" crossorigin="anonymous"></script>
      </Head>
      <Menu activeElement={"sezAssistenza"} pagInterna={true} />
      <Link href={{ pathname: '/', query: { section: 'chisiamo' } }}><a>path</a></Link>
      <section className={`section ${classes.section} `} >
        <HeaderPaginaInterna title="Come possiamo aiutarti?"
          subtitle="I nostri servizi di assistenza sono attivi 24 ore su 24." />
        <div className={classes.content}>

          <div className={classes.pageElements}>


            <div className={classes.defImage}>
              <FormAssistenza title="Contatta i nostri assistenti" icon="./call-center.svg" />
            </div>

            <div className={classes.text}>
              <div className={classes.titleContact}> Contact Center</div>
              <div className={classes.textContact}>
                <WhatsAppIcon /> &nbsp;  <label>+39 039.6612489</label>
              </div>
              <div className={classes.titleContact}> Supporto da remoto</div>
              <div className={classes.textRemote}>
                Scarica la versione di Team Viewer per il tuo sistema operativo per consentire ai nostri tecnici dell'Helpdesk di operare da remoto sul tuo dispositivo PC o Apple
                  <br></br>
                <br></br>
                <Button text="Assistenza remota (win)" onClick={linkTmWin}></Button>
                <br></br>
                <br></br>
                <Button text="Assistenza remota (mac)" onClick={linkTmMac}></Button>
              </div>
            </div>


            <div className={classes.pageElements}>

            </div>
          </div>
        </div>
      </section>
      <Footer pagInterna={true} />
    </div>

  );
};

export default Assistenza;
