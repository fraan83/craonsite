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
const Servizi_SviluppoSoftware = () => {
  const handler = () => {
    alert("clicked");
  };

  return (
    <div className="internaContainer" >
      <Head>
        <title> Craon - Sviluppo Software </title>
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
        <meta name="description" content="Craon realizza il software su misura per la tua azienda. " />
        <script src="https://kit.fontawesome.com/f9028cf83e.js" crossOrigin="anonymous"></script>
      </Head>
      <Menu activeElement={"servizi"} pagInterna={true} />
      <Link href={{ pathname: '/', query: { section: 'chisiamo' } }}><a>path</a></Link>
      <section className={`section ${classes.section} `} >
        <HeaderPaginaInterna title="Sviluppo Software "
          subtitle="Sottotitolo Sviluppo Software." />
        <div className={classes.content}>

          <div className={classes.pageElements}>
            <div className={classes.defImage}>
              <Image src="/servizi/sviluppo_software.jpg"  layout="fixed"  width={360} height={290} alt="Sviluppo Software" />
            </div>
            <div className={classes.text}>
              Grazie ad una combinazione tra   <strong>elevata capacità tecnica </strong>e profonde abilità di analisi dei processi aziendali, derivate da una pluriennale esperienza, l’azienda offre servizi di sviluppo software personalizzato in tecnologia .net core, java, node.js, angular, react, vue.
              <br></br>

                La metodologia utilizzata dai nostri analisti aziendali consente di raccogliere le specifiche per progetti chiavi in mano. Il nostro approccio Agile nello sviluppo del software ci permette di fornire valore ai nostri clienti in modo più rapido e rispondere più velocemente ai cambiamenti.
                <br></br>
                <br></br>

                Grazie a team composti da esperti sviluppatori del settore, guidati da Team Leader flessibili e preparati, Craon è in grado di supportare il cliente nella scelta delle migliori tecnologie per lo sviluppo in base alle reali necessità, prediligendo applicativi all’avanguardia. Una volta sviluppato il programma, l’azienda fornisce un periodo di garanzia e una manutenzione costante dei sistemi, così che tutto continui a funzionare correttamente e in maniera continuativa.
                <br></br>
                <br></br>
           
              </div>
              
              <div className={classes.textBottom}>

              <strong>Craon sviluppa soluzioni software  </strong>partendo dall'analisi del suo inserimento in azienda fino alla progettazione delle funzionalità e del dimensionamento dell'architettura, realizzata in totale integrazione con i sistemi informativi esistenti.
                <br></br>
                La collaborazione efficiente in azienda ha come risultato prodotti migliori, servizi migliori, clienti soddisfatti e riduzione di costi e tempi di produzione.



              </div>
          </div>
        </div>
        <ServiziSection></ServiziSection>
      </section>
      <Footer pagInterna={true} />
    </div>

  );
};

export default Servizi_SviluppoSoftware;
