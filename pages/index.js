import React, { useRef, useEffect } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import MainPage from "pages/MainPage";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import { initGA } from "components/google-analytics/ga-utils.ts";

 

export default function Home() {

  const handleAcceptCookie = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }
    console.log('coookies', getCookieConsentValue())
  };
  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
    console.log('coookies', getCookieConsentValue())
  };
  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);


  return (
    <div className="siteContainer">
       <CookieConsent 
            debug={false}
            location="bottom"
            style={{background: '#f5f2ee', color: '#696259' }}
            buttonStyle={{ background: '#2296d4', borderColor: '2296d4', color: '#fff', padding: '1rem' }}
            buttonText="ACCONSENTO"
            enableDeclineButton={true}
            declineButtonText="DECLINO"
            declineButtonStyle={{ background: 'red', borderColor: '2296d4', color: '#fff', padding: '1rem' }}
            cookieName="craon_cookies"
            expires={150}
            onAccept={handleAcceptCookie}
            onDecline={handleDeclineCookie}
            >
                <h3>Informazioni sui cookie presenti in questo sito</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>
                                    Utilizziamo i <Link href={'/terminiecondizioni'}> cookie per raccogliere   </Link>e analizzare informazioni sulle prestazioni e sull'utilizzo del sito, per fornire funzionalità di social media e per migliorare e personalizzare contenuti e pubblicità presenti
                             </p>

                            </td>
                            <td>

                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </CookieConsent>
         <Head>
            <title>Craon Srl</title>
            <link rel="icon" href="/favicon/favicon.ico" />
            <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png" />
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
            <meta name="description" content="Progettazione realizzazione gestione sistemi informativi. Digitalizzazione aziendale. B2B e-commerce. Business To Business. Integrazione sistemi. 
             Assistenza sistemistica. Formazione digitale, Progettazzione sistemi informativi Consulenza informatica it solutions, Sviluppo app, sviluppo applicaizoni, corsi informatica, corso react, corso angular,
             ricerca IT, ricerca informatica. Buy beautiful, responsive deisgn yourwebsite. Video corsi videocorsi online c# asp.net core 3.1 asp.net cire core
             Craon è il partner giusto. sviluppo portali web sviluppo portale web per PMI piccole medie imprese. applicazioni per pmi. resoourcing. "/>
             <script src="https://kit.fontawesome.com/f9028cf83e.js" crossOrigin="anonymous"></script>
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



          <h1 style={{ display: 'none' }} >
          servizi offerti da Craon sono molteplici: si va dalla progettazione, realizzazione e gestione di sistemi informativi allo sviluppo di software, portali web e applicazioni mobile.
Un’azienda informatica a 360° che rivolge i propri servizi sia alle PMI, con prodotti specialistici “on demand”, sia alle grandi aziende del settore bancario e finanziario, che ricercano attraverso l’outsourcing dei propri progetti una maggiore flessibilità.
CRAON È IL PARTNER GIUSTO
          riduzione dei costi:
          Craon si propone di adeguare il giusto dimensionamento di una architettura informatica e la geolocalizzazione della stessa con un reale beneficio a livello di costi 
          adeguatezza dei sistemi: 
          Craon si adopera affinchè si fornisca al cliente un'infrastruttura su misura,tarata su analisi effettuata dai nostri professionisti,partendo dal livello più basso come l'hardware arrivando alle integrazioni fra i diversi sistemi aziendali
          Craon è sempre aggiornata sulle nuove tecnologie e si propone di restare al passo fornendo ai propri clienti soluzioni all'avanguardia in grado di soddisfare le necessità sempre più crescenti di performance ottimizzando i costi aziendali 
          .
          L’interesse per il coding, negli ultimi anni, è cresciuto in maniera esponenziale. Il termine significa letteralmente programmazione, ma quando si parla di coding non si intende la programmazione informatica nel senso più tradizionale dell’espressione, ovvero la scrittura di codice.

Non è “roba da ingegneri” ma una nuova lingua, indispensabile nel mondo odierno forse più dell’inglese, perché permette di capire come funziona un computer e di dialogare con esso per assegnargli dei compiti e dei comandi.

Per questo il coding dovrebbe, a nostro avviso, diventare una materia di studio obbligatoria già a partire dalla scuola primaria. Imparando questa lingua, bambini e ragazzi diventano infatti utenti attivi e consapevoli di tecnologia, anzi ne diventano produttori.

Il progetto Code Campus nasce un anno e mezzo fa proprio con questo obiettivo: avvicinare i bambini dai 6 anni in su al mondo del digitale con un ruolo attivo e aiutarli a sviluppare competenze e capacità che gli saranno utili per il futuro.

Come lo facciamo? Attraverso dei percorsi formativi che pensiamo e strutturiamo insieme ai loro insegnanti a scuola. Utilizziamo metodi di apprendimento cooperativo per favorire l’interazione e la collaborazione tra gli studenti, valorizzando l’apporto di ogni singolo componente del gruppo in vista del raggiungimento di un obiettivo comune.

Con i nostri corsi bambini e ragazzi scopriranno i lati più divertenti della programmazione e svilupperanno la propria immaginazione. Crediamo infatti che il gioco e la creatività siano un fondamentale strumento di conoscenza, un mezzo di aggregazione ma anche di espressione delle capacità dei singoli.
Il nostro intento non è quello di formare futuri programmatori, ma educare i bambini al pensiero computazionale, che è la capacità di risolvere problemi pianificando la strategia migliore. Usando la logica, imparano a scomporre i problemi più complessi in tante piccole parti, che diventano più gestibili se affrontate una per volta. Trovando una soluzione a ciascuna di esse, i bambini sono poi in grado di risolvere il problema generale.

Il coding è lo strumento più adatto per insegnare ai bambini a pensare in maniera computazionale, perché utilizza un approccio ludico. Insomma i bambini non imparano solo a programmare, ma programmano per apprendere, e lo fanno divertendosi.

 

CRAON ACADEMY
La Craon Academy nasce con l’intento di offrire una formazione tecnica adeguata per stare al passo con le richieste provenienti dal mercato ICT. I corsi vertono sulle seguenti aree e tecnologie: Java, Microsoft .Net, C#, PHP, Python, Android, iOs, xmarine, PLSQL
I nostri corsi sono rivolti a:

giovani neodiplomati e neolaureati in discipline scientifiche, che vogliano colmare il gap tra la preparazione scolastica e le skill richieste dal mercato
chiunque desideri una formazione di base o specialistica nelle suddette tecnologie
I corsi hanno una durata di 3 mesi e si svolgono dal lunedì al venerdì presso la nostra sede di Vimercate.
Al termine del corso i migliori candidati verranno inseriti nel nostro organico.


Craon da sempre offre l’esperienza e la professionalità dei propri addetti alle società che necessitano una consulenza specifica e competente in campo informatico.
Le figure professionali che propone sono:

analisti programmatori;
web developer
developer mobile
web designer
analisti funzionali;
programmatori (da Junior a Senior);
sistemisti (da Junior a Senior);
database administrator (DBA);
project manager;
personale per la gestione ordinaria delle infrastrutture;
operatori business intelligence
architetti it
PMP
PMO

Nell’era 4.0 un’impresa di qualsiasi dimensione per avere visibilità deve essere online.
Per questo motivo Craon offre ai propri clienti soluzioni web a 360°: dalla registrazione del dominio, alla progettazione e creazione del sito, al collocamento dello stesso su server Craon (hosting) o su macchine di proprietà del cliente ma situate presso il data center Craon (housing), al posizionamento ottimale nei motori di ricerca e alla eventuale manutenzione del sito.

Craon utilizza gli strumenti e i linguaggi (HTML, PHP, ASP, ASP.NET, JAVA) più adeguati e all’avanguardia per sviluppare oltre a semplici siti html, applicazioni web per la gestione di banche dati, CMS (Content Management System), soluzioni di “e-commerce” e di condivisione di documenti.

I servizi web offerti da Craon sono:

registrazione dominio;
soluzioni di posta elettronica;
PEC (Posta Elettronica Certificata);
progettazione e sviluppo siti web;
servizi di hosting e housing;
firewall;
vulnerability test;
web site monitoring;
soluzioni web marketing;
piattaforme per e-learning;
sistemi di ticketing;
sviluppo mobile.
Il personale di Craon possiede tutte le competenze e capacità tecniche per analizzare le esigenze del cliente e proporre la più adeguata soluzione hardware, software e di networking, garantendo anche un’attività di supporto sistemistico a vari livelli su apparecchiature con tecnologie Microsoft e Unix/Linux.CRAON svolge, inoltre, un’attività di assistenza sistemistica (di vari livelli) su apparecchiature con tecnologie Microsoft e Unix/Linux, grazie alle competenze e capacità tecniche del proprio personale.Servizi di assistenza sistemistica:
progettazione e realizzazione infrastruttura reti;
installazione, configurazione di router, firewall e apparati vari;
installazione e manutenzione server Microsoft e Unix/Linux;
virtualizzazione server;
controllo e gestione di sistemi di backup;
installazione software;
installazione, configurazione e manutenzione postazioni client;
installazione e gestione di periferiche (scanner, stampanti di rete e locali).
I tecnici CRAON possono operare sulle postazioni dei clienti direttamente o tramite collegamenti da remoto per rendere l’intervento il più tempestivo e rapido possibile.

Ogni azienda ha caratteristiche proprie che la distinguono dalle altre. Ciò implica che soluzioni standard possano non risultare adeguate a soddisfare i bisogni di un’impresa e siano necessarie soluzioni su misura. Per questo motivo Craon si occupa di progettazione sistemi informativi on demand che rispondano in maniera efficace ed efficiente alle necessità di ogni singolo cliente.

L’evoluzione tecnologica spinge molte società a innovarsi e a rinnovare, ma spesso questo processo implica fasi di transito da un vecchio sistema a uno nuovo con relativi problemi di dialogo tra le diverse applicazioni. Craon dispone di uno staff di analisti e programmatori in grado di valutare le problematiche e sviluppare la migliore soluzione di system integration.
RIVENDITA HARDWARE E SOFTWARE
Per offrire un servizio globale ai propri clienti Craon si occupa anche della rivendita o noleggio di hardware e software delle migliori marche.

Craon si occupa di database management ovvero di ideare e realizzare database relazionali per l’archiviazione dei dati su piattaforme SQL Microsoft, Mysql ed Oracle.
Nel 2005 Craon ha ottenuto un riconoscimento dal National Cancer Institute per il servizio di alta professionalità reso in qualità di Database Designer and Manager nello studio internazionale sulle cause del tumore ai polmoni.
          </h1>
    </div>
  )
}
