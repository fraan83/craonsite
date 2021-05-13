import React, {useRef, useEffect} from "react";
import Link from 'next/link'
import HomeSection from "components/sections/HomeSection"
import ServiziSection from "components/sections/ServiziSection"
import classes from "../styles/MainPage.module.scss" 
import ScrollNavigation from 'react-single-page-navigation'
import Footer from "components/footer/Footer"
import ClientiSection from "components/sections/ClientiSection"
import ContattiSection from "components/sections/ContattiSection"
import CarriereSection from "components/sections/CarriereSection"
import ChisiamoSection from "components/sections/ChisiamoSection"
import { useRouter } from 'next/router'

const MainPage = () => {
    const marginMenu = -90;
    const router = useRouter();
    console.log("QUERYY",router.query.section);
    const btNavigation = useRef();
    //btNavigation.current?.click();

    useEffect(()=>{
        //btNavigation.current?.click();
        //goTo(router.query.section, "smooth", marginMenu);
    },[]);
    
    return(
     <ScrollNavigation elements={{ sezHome: {}, servizi: {}, chisiamo: {}, clienti: {}, carriere: {} , contatti: {} }} >
        {({ refs, activeElement, goTo }) => ( 
             <div className={classes.container}  >
                 {/* {(router.query.section () => goTo(router.query.section, "smooth", marginMenu))()} */}

            <div className={classes.menuContainer} >
                    <figure className={classes.logoCraon}  onClick={() => goTo(0)} ><img src="/logo-craon.png" /></figure>
                    <nav  className={classes.navigation}>
                        <div  onClick={() => goTo('servizi', "smooth", marginMenu)} className={`${classes.link} ${activeElement === 'servizi' && classes.linkActive}`} >SERVIZI</div>
                        <div  onClick={() => goTo('chisiamo', "smooth", marginMenu)} className={`${classes.link} ${activeElement === 'chisiamo' && classes.linkActive}`}>CHI SIAMO</div>
                        <div  onClick={() => goTo('clienti', "smooth", marginMenu)} className={`${classes.link} ${activeElement === 'clienti' && classes.linkActive}`} >CLIENTI</div>
                        <div  onClick={() => goTo('carriere', "smooth", marginMenu)} className={`${classes.link} ${activeElement === 'carriere' && classes.linkActive}`}>AREA CARRIERE</div>
                        <Link href="/assistenza">
                            <div  className={`${classes.link} ${activeElement === 'sezAssistenza' && classes.linkActive}`} >ASSISTENZA</div>
                        </Link> 
                        <div  onClick={() => goTo('contatti', "smooth", marginMenu)} className={`${classes.link} ${activeElement === 'contatti' && classes.linkActive}`}>CONTATTI</div>
                    </nav>
                    <figure  className={classes.logoCCA}  onClick={() => window.open('http://www.codecampus.it/','','')} ><img src="/logo-codecampus.png" /></figure>
                    {/* <div className={classes.boxRight} >
                            <ul className={classes.social}  >
                                <li  onClick={() => window.open('http://google.it','','')} ><img src="/logo-tw.png" /></li>
                                <li  onClick={() => window.open('http://google.it','','')} ><img src="/logo-tw.png" /></li>
                                <li  onClick={() => window.open('http://google.it','','')} ><img src="/logo-tw.png" /></li>
                            </ul>
                            <figure  className={classes.logoCCA}  onClick={() => goTo('sezHome')} ><img src="/logo-codecampus.png" /></figure>
                    </div> */}
            </div>
            <section ref={refs.sezHome}  className={classes.section}>
              <HomeSection /> 
            </section> 
            <input ref={btNavigation} name="bt"  type="button" onClick={() => goTo(router.query.section, "smooth", marginMenu)} />
          <section ref={refs.servizi}  className={classes.section}>
                <ServiziSection /> 
            </section>
            <section ref={refs.chisiamo}  className={classes.section}>
                <ChisiamoSection />
            </section>
            <section ref={refs.clienti}  className={classes.section}>
                <ClientiSection /> 
            </section>
            <section ref={refs.carriere}  className={classes.section}>
                <CarriereSection /> 
            </section>
            {/* <section ref={refs.sezAssistenza}  className={classes.section}>
                ASSISTENZA
            </section> */} 
            <section ref={refs.contatti}  className={classes.section}>
                <ContattiSection />
            </section>
            <Footer goToPage={(pagina) => goTo(pagina, "smooth", marginMenu)} />
          </div>
        )}
      </ScrollNavigation>); 
}

export default MainPage;