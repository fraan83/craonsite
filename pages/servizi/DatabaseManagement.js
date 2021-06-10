import Link from 'next/link'
import React from "react";
import classes from "styles/Servizi.module.scss"
import Title from "components/title/Title";
import Menu from "components/menu/Menu";
import Image from 'next/image';
import Footer from "components/footer/Footer";
import HeaderPaginaInterna from 'components/header-pagina-interna/header-pagina-interna';
import Head from 'next/head';
import ServiziSection from 'components/sections/ServiziSection';
const Servizi_Database = () => {
  const handler = () => {
    alert("clicked");
  };

  return (
    <div className="internaContainer" >
      <Head>
        <title> Craon - Database Management </title>
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
        <meta name="description" content="Craon Database Management, sistemi SQL, SQL Server, MySQL, ORACLE, PL/SQL " />
        <script src="https://kit.fontawesome.com/f9028cf83e.js" crossOrigin="anonymous"></script>
      </Head>
      <Menu activeElement={"servizi"} pagInterna={true} />
      <Link href={{ pathname: '/', query: { section: 'chisiamo' } }}><a>path</a></Link>
      <section className={`section ${classes.section} `} >
        <HeaderPaginaInterna title="DataBase Management"
          subtitle="Sottotitolo Database management." />
        <div className={classes.content}>

          <div className={classes.pageElements}>
            <div className={classes.defImage}>
              <Image src="/servizi/db_management.jpg" width={380}  height={319} alt="DBA MANAGEMENT" layout="fixed" />
            </div>
            <div className={classes.text}>
              Il Team DBA di Craon è composto da analisti esperti in grado di fornire un servizio all'avanguardia per garantire database costantemente aggiornati e sempre funzionanti.
            <br></br>
              <br></br>
            I servizi di database che Craon eroga possono essere gestiti in soluzioni differenti per agevolare la scelta dei clienti in base alle rispettive esigenze e budget. L’azienda è in grado di proporre
            supporto e servizi database personalizzati attraverso un’analisi delle necessità che porta a selezionare la modalità di consulenza più adatta: dall’amministrazione dei database, alla gestione
            dello spazio disco e degli utenti, al troubleshooting, all’individuazione dei colli di bottiglia fino alla movimentazione dati, performance & tuning, sicurezza, storage, backup e disaster recovery.
            <br></br>
              <br></br>
            Craon ha maturato un’esperienza variegata sui servizi di infrastructure management, sviluppando competenze per fornire assistenza remota sulle problematiche ordinarie e sulla gestione delle
            emergenze per l’intera infrastruttura IT o per le sue singole componenti.
            <br></br>
              <br></br>


            </div>

            <div className={classes.textBottom}>

              Inoltre, grazie ai nostri esperti, siamo preparati per aiutarvi a:
            <ul className={classes.clist}>
                <li> sviluppare database nativi in cloud;</li>
                <li> migrare su cloud i vostri database on-premise.</li>
              </ul>
            Gli ambienti cloud in cui operiamo sono i principali e i più performanti: Amazon AWS, Microsoft Azure o Google Cloud Platform.
            Il nostro personale può occuparsi di sviluppare la strategia cloud, la configurazione dell'infrastruttura, la riprogettazione dell'architettura, la migrazione e la manutenzione.
            <br></br>
              <br></br>
            I tecnici e gli esperti DBA del team Craon forniscono soluzioni concrete ai problemi reali della tua azienda.

                </div>
          </div>
        </div>
        <ServiziSection />
      </section>
      <Footer pagInterna={true} />
    </div>

  );
};

export default Servizi_Database;
