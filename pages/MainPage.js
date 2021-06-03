import React, { useRef, useEffect } from "react";
import Head from 'next/head';
import Link from 'next/link';
import HomeSection from "components/sections/HomeSection";
import ServiziSection from "components/sections/ServiziSection";
import classes from "../styles/MainPage.module.scss";
import ScrollNavigation from 'react-single-page-navigation';
import Footer from "components/footer/Footer";
import ClientiSection from "components/sections/ClientiSection";
import ContattiSection from "components/sections/ContattiSection";
import CarriereSection from "components/sections/CarriereSection";
import ChisiamoSection from "components/sections/ChisiamoSection";
import Menu from "components/menu/Menu";
import { useRouter } from 'next/router';
import 'aos/dist/aos.css';
import Aos from "aos";
import CookieConsent from "react-cookie-consent";
 

const MainPage = () => {
    const marginMenu = -90;
    const router = useRouter();
    useEffect(() => {
        Aos.init({ duration: 300 });
    }, [])

    // console.log("QUERY",router.query.section); 

    return (
        <div>
            <CookieConsent 
            debug={true}
            location="bottom"
            style={{background: '#f5f2ee', color: '#696259' }}
            buttonStyle={{ background: '#2296d4', borderColor: '2296d4', color: '#fff', padding: '1rem' }}
            buttonText="ACCONSENTO"
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

            <ScrollNavigation elements={{ sezHome: {}, servizi: {}, chisiamo: {}, clienti: {}, carriere: {}, contatti: {} }} >
                {({ refs, activeElement, goTo }) => (
                    <div className={classes.container}>

                        <Menu goToPage={(pagina) => goTo(pagina, "smooth", marginMenu)} goToPixel={(pos) => goTo(pos)} activeElement={activeElement} sezDefault={router.query.section} pagInterna={false} />

                        <section ref={refs.sezHome} className={classes.section}>
                            <HomeSection goToPage={(pagina) => goTo(pagina, "smooth", marginMenu)} />
                        </section>
                        <section ref={refs.servizi} className={classes.section}>
                            <ServiziSection />
                        </section>
                        <section data-aos="fade-up" ref={refs.chisiamo} className={classes.section}>
                            <ChisiamoSection />
                        </section>
                        <section ref={refs.clienti} className={classes.section}>
                            <ClientiSection />
                        </section>
                        <section data-aos="fade-up" ref={refs.carriere} className={classes.section}>
                            <CarriereSection />
                        </section>
                        <section ref={refs.contatti} className={classes.section}>
                            <ContattiSection />
                        </section>
                        <Footer goToPage={(pagina) => goTo(pagina, "smooth", marginMenu)} />
                    </div>
                )}
            </ScrollNavigation>
        </div>
    );

}

export default MainPage;