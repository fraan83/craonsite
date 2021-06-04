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
            debug={true}
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
    </div>
  )
}
