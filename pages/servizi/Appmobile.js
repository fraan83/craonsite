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
const Servizi_Appmobile = () => {
  const handler = () => {
    alert("clicked");
  };

  return (
    <div className="internaContainer" >


      <Head>
        <title> Craon - App Mobile </title>
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
        <meta name="description" content="Craon Realizza App Mobile per la tua attività. Azienda sviluppo sistemi di integrazione app windoes unix/linux " />
        <script src="https://kit.fontawesome.com/f9028cf83e.js" crossOrigin="anonymous"></script>
      </Head>
      <Menu activeElement={"servizi"} pagInterna={true} />
      <Link href={{ pathname: '/', query: { section: 'servizi' } }}><a>path</a></Link>
      <section className={`section ${classes.section} `} >
        <HeaderPaginaInterna title="App Mobile"
          subtitle="Sottotitolo App Mobile." />
        <div className={classes.content}>

          <div className={classes.pageElements}>
            <div className={classes.defImage}>
              <Image src="/servizi/app_mobile.jpg" width={450} height={319} layout="fixed" alt="app mobile"   />
            </div>
            <div className={classes.text}>
                  Progettare, sviluppare e adattare gli strumenti a supporti multicanale è, oggi, necessità imprescindibile.
                  <br></br>
                  <br></br>
                  <strong>Craon</strong>, nell’ambito del mondo mobile, utilizza diversi strumenti di sviluppo con tecnologie Android e IOS ad alte prestazioni, per farti rimanere al passo con la rapida evoluzione dell’industria mobile, creando un’esperienza unica per il tuo pubblico.
                  Negli ultimi anni l’azienda ha formato un team dedicato per rispondere alle esigenze di un mercato sempre più orientato al mobile.
                  <br></br>
            
                  Oltre le applicazioni native, i nostri esperti sono in grado di creare app cross-platform che offrono la stessa qualità di esperienza utente, ma lo sviluppo necessita di una sola base di codice per più piattaforme.
                  Con l'evoluzione dei dispositivi e delle piattaforme mobili, abbiamo acquisito una vasta esperienza nella costruzione di applicazioni ibride robuste, sicure e scalabili per iOS e Android: i nostri sviluppatori di app mobili
                  ibride utilizzano tecnologie ponte come <b>Ionic, Flutter, React Native e Xamarin </b>, ottimizzando i costi associati allo sviluppo di due diverse versioni per Android e iOS.
                  <br></br>
          


              </div>
              <div className={classes.textBottom}>
              L'approccio allo sviluppo di un'applicazione mobile è molto diverso rispetto al mondo del Web. Le caratteristiche peculiari dei device, i diversi sistemi operativi, le interfacce grafiche particolari, sono uno stimolo per le
                  aziende ad affrontare sempre nuove sfide per soddisfare le aspettative di un settore in continua evoluzione.
                  <br></br>
                                <br></br>
                                <strong>Parola d’ordine? Flessibilità.</strong> Saper adattare contenuti multimediali a canali diversi e farli funzionare ugualmente bene su ogni piattaforma è fondamentale quando si tratta di mobile.
                  <br></br>
                                <br></br>
                  Craon sviluppa applicazioni sia in ambito industriale sia in ambito applicazioni vetrina, per un’esperienza utente fluida e intuitiva. A seconda dei tuoi obiettivi di business siamo in grado di consigliarti la soluzione migliore per la realizzazione e gestione della tua App, e rimaniamo in costante comunicazione durante la creazione per garantire un risultato efficace. Infatti, il team dedicato è in grado di accompagnare i clienti lungo l’intero processo di progettazione, sviluppo e pubblicazione di applicazioni o di siti internet fruibili su dispositivi mobili
              </div>
          </div>

        </div>
        <ServiziSection />
      </section>

      <Footer pagInterna={true} />
    </div>

  );
};

export default Servizi_Appmobile;
