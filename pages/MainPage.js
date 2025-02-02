import React, {useRef, useEffect} from "react";

import HomeSection from "components/sections/HomeSection"
import ServiziSection from "components/sections/ServiziSection"
import classes from "../styles/MainPage.module.scss" 
import ScrollNavigation from 'react-single-page-navigation'
import Footer from "components/footer/Footer"
import ClientiSection from "components/sections/ClientiSection"
import ContattiSection from "components/sections/ContattiSection"
import CarriereSection from "components/sections/CarriereSection"
import ChisiamoSection from "components/sections/ChisiamoSection"
import Menu from "components/menu/Menu"
import { useRouter } from 'next/router'

const MainPage = () => {
    const marginMenu = -90;
    const router = useRouter();
    console.log("QUERY",router.query.section); 
    
    return(
     <ScrollNavigation elements={{ sezHome: {}, servizi: {}, chisiamo: {}, clienti: {}, carriere: {} , contatti: {} }} >
        {({ refs, activeElement, goTo }) => ( 
           <div className={classes.container}>
            <Menu  goToPage={(pagina) => goTo(pagina, "smooth", marginMenu)} goToPixel={(pos) => goTo(pos)} activeElement={activeElement} sezDefault={router.query.section} pagInterna={false}  />

            <section ref={refs.sezHome}  className={classes.section}>
                <HomeSection  goToPage={(pagina) => goTo(pagina, "smooth", marginMenu)} /> 
            </section> 
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
            <section ref={refs.contatti}  className={classes.section}>
                <ContattiSection />
            </section>
            <Footer goToPage={(pagina) => goTo(pagina, "smooth", marginMenu)} />
          </div>
        )}
      </ScrollNavigation>); 
}

export default MainPage;