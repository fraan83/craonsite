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
const Servizi_Enterprise = () => {
  const handler = () => {
    alert("clicked");
  };

  return (
    <div className="internaContainer" >
      <Head>
        <title> Craon - ERP </title>
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
        <meta name="description" content="Craon Enterprise Resourcing E.R.P. " />
        <script src="https://kit.fontawesome.com/f9028cf83e.js" crossOrigin="anonymous"></script>
      </Head>
      <Menu activeElement={"servizi"} pagInterna={true} />
      <Link href={{ pathname: '/', query: { section: 'chisiamo' } }}><a>path</a></Link>
      <section className={`section ${classes.section} `} >
        <HeaderPaginaInterna title="Enterprise Resource Planning "
          subtitle="Sottotitolo Enterprise Resource Planning." />
        <div className={classes.content}>

          <div className={classes.pageElements}>
            <div className={classes.defImage}>
              <Image src="/servizi/erp.jpg" width={360} height={290} alt="ERP" layout="fixed"/>
            </div>
            <div className={classes.text}>
            Siamo in grado di realizzare sistemi ERP personalizzati per creare soluzioni scalabili, per automatizzare i processi critici e fornire informazioni sui dati chiave, dando accesso in tempo reale ai dati mission critical.
 <br></br>
 <br></br>
 Grazie alle competenze e al know-how dei nostri professionisti, Craon è in grado di coprire tutte le fasi di sviluppo di un progetto ERP, dall’analisi dei requisiti alla customizzazione della soluzione finale, rimanendo
 competitiva su un mercato in continua evoluzione.
 <br></br>
 <br></br>
 Analizziamo il vostro attuale ambiente di business per identificare le incompatibilità di sistemi disparati e formuliamo strategie per integrare e migrare il software ERP mission critical in un'infrastruttura convergente.
 <br></br>
 <br></br>

              </div>


              <div className={classes.textBottom}>

              I nostri sviluppatori esperti inoltre forniscono tutta la consulenza necessaria per supportare meglio le applicazioni software più vecchie, migliorare l’operatività, analizzare lo stato attuale dei sistemi, valutare eventuali
 lacune che possono richiedere la personalizzazione ed effettuare i test per garantire un corretto funzionamento.
 <br></br>
 <br></br>
 <b>Craon</b> è in grado di rispondere concretamente alle esigenze di ogni tipo di cliente, grazie alla capacità di integrare gli applicativi ERP alle diverse soluzioni informatiche.
 

              </div>
          </div>
        </div>
        <ServiziSection />
      </section>
      <Footer pagInterna={true} />
    </div>

  );
};

export default Servizi_Enterprise;
