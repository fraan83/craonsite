import Link from 'next/link'
import React from "react";
import classes from "../styles/AssistenzaPage.module.scss";
import Title from "components/title/Title";
import Subtitle from 'components/subtitle/subtitle';
import Menu from "components/menu/Menu";
import Image from 'next/image';
import Footer from "components/footer/Footer";

import HeaderPaginaInterna from 'components/header-pagina-interna/header-pagina-interna';
import EmailIcon from '@material-ui/icons/Email';
import InsertChartIcon from '@material-ui/icons/InsertChart';

import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import Head from 'next/head';
import { hexToRgb } from '@material-ui/core';

const TerminiECondizioni = () => {
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
        <title> Craon - Termini e Condizioni </title>
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
        <meta name="description" content="Termini e Condzioni dell'assistenza Craon,  Conttattare l'utente per l'assistenza utilizza cookies Google Analytics.
            Informazioni di contatto utilizzo assistenza. "/>
        <script src="https://kit.fontawesome.com/f9028cf83e.js" crossOrigin="anonymous"></script>
      </Head>
      <Menu activeElement={"sezAssistenza"} pagInterna={true} />
      <Link href={{ pathname: '/', query: { section: 'chisiamo' } }}><a>path</a></Link>
      <section className={`section ${classes.section} `} >
        <HeaderPaginaInterna title="Privacy Policy di www.craon.it"
          subtitle="Questa Applicazione raccoglie alcuni Dati Personali dei propri Utenti." />
        <div className={classes.content}>

          <div className={classes.titlePrivacy}>
            <h3>Dati personali raccolti per le seguenti finalità ed utilizzando i seguenti servizi:</h3>
          </div>

        


          <div className={classes.containerPolicy}>
            <div className={classes.itemPolicy}>
              <h3> <EmailIcon /> Contattare l'Utente</h3>
              <h5>Modulo di contatto</h5>
              <p>
                Dati Personali: cognome; data di nascita; email; nome; professione; ragione sociale</p>
            </div>
            <div className={classes.itemPolicy}>
              <h3> <DescriptionIcon /> Servizi di piattaforma e hosting</h3>
              <h5></h5>
              <p>
                Dati Personali: varie tipologie di Dati secondo quanto specificato dalla privacy policy del servizio</p>
            </div>


          </div>
          <div className={classes.containerPolicy}>
            <div className={classes.itemPolicy}>
              <h3> <InsertChartIcon /> Statistica</h3>
              <h5>
                Google Analytics</h5>
              <p>

                Dati Personali: Cookie; Dati di utilizzo

              </p>
            </div>

            <div className={classes.itemPolicy}>
              <h3> <PersonIcon /> Infromazioni di contatto</h3>
              <h5>Titolare del Trattamento dei Dati</h5>
              <p>

                Craon srl - via De Castillia, 7 - 20871 Vimercate (MB)<br></br>

                Indirizzo email del Titolare: info@craon.it</p>
            </div>

          </div>
        </div>

      </section>
      <Footer pagInterna={true} />
    </div>

  );
};

export default TerminiECondizioni;
