import Link from 'next/link'
import React from "react";
import classes from "styles/Servizi.module.scss";
import Title from "components/title/Title";
import Menu from "components/menu/Menu";
import Image from 'next/image';
import Footer from "components/footer/Footer";
import HeaderPaginaInterna from 'components/header-pagina-interna/header-pagina-interna';
import Head from 'next/head';
import ServiziSection from 'components/sections/ServiziSection';
const Servizi_ITSecurity = () => {
  const handler = () => {
    alert("clicked");
  };

  return (
    <div className="internaContainer" >
      <Head>
        <title> Craon - IT Security </title>
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
        <meta name="description" content="Craon Sicurezza dei tuoi sistemi, software " />
        <script src="https://kit.fontawesome.com/f9028cf83e.js" crossOrigin="anonymous"></script>
      </Head>
      <Menu activeElement={"servizi"} pagInterna={true} />
      <Link href={{ pathname: '/', query: { section: 'chisiamo' } }}><a>path</a></Link>
      <section className={`section ${classes.section} `} >
        <HeaderPaginaInterna title="IT Security "
          subtitle="Sottotitolo IT Security." />
        <div className={classes.content}>

          <div className={classes.pageElements}>
            <div className={classes.defImage}>
              <Image src="/servizi/it_security.jpg" width={450} height={319} alt="It Securuty" layout="fixed" />
            </div>
            <div className={classes.text}>
              La connessione costante comporta nuovi rischi per la sicurezza dei dati. <strong>Craon offre servizi a 360 gradi per la sicurezza informatica</strong>.
            <br></br>
              <br></br>
            Con una Business Unit interamente dedicata, l’azienda offre soluzioni che includono: progettazione, implementazione, gestione, manutenzione ed ottimizzazione di infrastrutture di reti complesse, gestione remota delle infrastrutture IT, soluzioni VoIP, colocation, housing, hosting, VPS, carrier broadband e outsourcing di infrastrutture IT.
            <br></br>
            In realtà aziendali complesse e strutturate la sicurezza dei dati e della rete sono vitali. Craon mette a disposizione servizi completi per la sicurezza informatica a partire dalla verifica delle vulnerabilità delle reti e la risoluzione delle criticità e delle problematiche riscontrate. L’azienda garantisce, inoltre, una risposta veloce e puntuale nel caso di attacchi per circoscrivere i danni permettendo ai sistemi aziendali di continuare a lavorare.
            <br></br>
              <br></br>
        

              </div>

              <div className={classes.textBottom}>
              <strong>Vulnerability assessment e penetration test.</strong>
              <br></br>
            Siamo in grado di valutare le misure di sicurezza delle infrastrutture della vostra azienda testandone l'efficacia: valutazione delle minacce, valutazione delle vulnerabilità e scansione delle vulnerabilità.
            <br></br>
            Con i penetration test possiamo trovare potenziali violazioni della sicurezza prima che possano essere sfruttate da qualcuno. Possibili esempi dell'impatto aziendale di un tale attacco potrebbero includere il furto di informazioni sensibili, l'utilizzo non autorizzato delle risorse del server, o la compromissione dell'infrastruttura interna dell'azienda utilizzando l'applicazione vulnerabile come gateway.
            <br></br>
            Il nostro team effettuerà un'ampia analisi dei rischi per rilasciare raccomandazioni a livello strategico, tattico e operativo.
            <br></br>
              <br></br>
              <strong> Disaster recovery e business continuity.</strong>
              <br></br>
            In caso di disastro le aziende spesso subiscono le conseguenze di massicce perdite di dati, interruzioni di applicazioni e hardware distrutto, con il risultato di un'infrastruttura aziendale paralizzata che è difficile, se non impossibile, da riparare. Se non fate piani definiti per prendervi cura delle informazioni, il vostro business potrebbe essere permanentemente paralizzato. Craon aiuta a ridurre al minimo l'impatto dannoso di disastri imprevisti, preparando le aziende a ripristinare rapidamente ed efficacemente i servizi di infrastruttura tecnologica in seguito a incidenti.

            I nostri consulenti IT esperti sviluppano strategie di emergenza per tutti i tipi e dimensioni di organizzazioni, garantendo la massima tranquillità e mantenendo i dipendenti e i dati collegati in caso di emergenza.
            <br></br>
              <br></br>
            Craon è un partner affidabile che fornisce soluzioni di IT security per garantire la sicurezza dei dati in azienda e la business continuity.


                </div>
          </div>
        </div>
        <ServiziSection></ServiziSection>
      </section>
      <Footer pagInterna={true} />
    </div>

  );
};

export default Servizi_ITSecurity;
