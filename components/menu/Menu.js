import React, { useState, useEffect } from "react";
import classes from "./Menu.module.scss";
import PropTypes from "prop-types";
import Link from 'next/link'



const Menu = ({ goToPage, goToPixel, activeElement, sezDefault, pagInterna }) => {

    const [navbar, setNavbar] = useState(false);

    //console.log("SEZ DEFAULT:"+sezDefault);
    useEffect(() => {
        if (!!sezDefault)
            goToPage(sezDefault);
    }, []);

    const handleClick = () => {

        var toggler = document.getElementById("burger");
        var navBarMobile = document.getElementById("navbarMobile");
        setNavbar(prevState => !prevState)
        console.log('nav', navbar)

    }

    return (
        (pagInterna) ?
            (
                <div className={classes.menuContainer} >
                    <Link href={{ pathname: '/' }}>
                        <figure className={classes.logoCraon}   ><img src="/logo-craon.png" /></figure>
                    </Link>
                    <nav className={classes.navigation}>
                        <Link href={{ pathname: '/', query: { section: 'servizi' } }}>
                            <div className={`${classes.link} ${(activeElement === 'servizi') ? classes.linkActive : ""}`} >SERVIZI</div>
                        </Link>
                        <Link href={{ pathname: '/', query: { section: 'chisiamo' } }}>
                            <div className={`${classes.link} ${(activeElement === 'chisiamo') ? classes.linkActive : ""}`}>CHI SIAMO</div>
                        </Link>
                        <Link href={{ pathname: '/', query: { section: 'clienti' } }}>
                            <div className={`${classes.link} ${(activeElement === 'clienti') ? classes.linkActive : ""}`} >CLIENTI</div>
                        </Link>
                        <Link href={{ pathname: '/', query: { section: 'carriere' } }}>
                            <div className={`${classes.link} ${(activeElement === 'carriere') ? classes.linkActive : ""}`}>AREA CARRIERE</div>
                        </Link>
                        <Link href="/assistenza">
                            <div className={`${classes.link} ${(activeElement === 'sezAssistenza') ? classes.linkActive : ""}`} >ASSISTENZA</div>
                        </Link>
                        <Link href={{ pathname: '/', query: { section: 'contatti' } }}>
                            <div className={`${classes.link} ${(activeElement === 'contatti') ? classes.linkActive : ""}`}>CONTATTI</div>
                        </Link>
                    </nav>
                    <figure className={classes.logoB2B} onClick={() => window.open('http://www.codecampus.it/', '', '')} ><img src="/b2b-small.png" /></figure>
                    <figure className={classes.logoCCA} onClick={() => window.open('http://www.codecampus.it/', '', '')} ><img src="/logo-codecampus-scopri.png" /></figure>
                    {navbar ? (
                        <div className={classes.w100}>
                            <div id="burger" className={classes.burger} onClick={handleClick}>
                                <i aria-hidden className="fas fa-times"></i>
                            </div>
                            <div id="navbarMobile" className={classes.menuContainerMobile} >
                                <nav onClick={handleClick} className={classes.navigationMobile}>
                                    <Link href={{ pathname: '/', query: { section: 'servizi' } }}>
                                        <div className={`${classes.link} ${(activeElement === 'servizi') ? classes.linkActive : ""}`} >SERVIZI</div>
                                    </Link>
                                    <Link href={{ pathname: '/', query: { section: 'chisiamo' } }}>
                                        <div className={`${classes.link} ${(activeElement === 'chisiamo') ? classes.linkActive : ""}`}>CHI SIAMO</div>
                                    </Link>
                                    <Link href={{ pathname: '/', query: { section: 'clienti' } }}>
                                        <div className={`${classes.link} ${(activeElement === 'clienti') ? classes.linkActive : ""}`} >CLIENTI</div>
                                    </Link>
                                    <Link href={{ pathname: '/', query: { section: 'carriere' } }}>
                                        <div className={`${classes.link} ${(activeElement === 'carriere') ? classes.linkActive : ""}`}>AREA CARRIERE</div>
                                    </Link>
                                    <Link href="/assistenza">
                                        <div className={`${classes.link} ${(activeElement === 'sezAssistenza') ? classes.linkActive : ""}`} >ASSISTENZA</div>
                                    </Link>
                                    <Link href={{ pathname: '/', query: { section: 'contatti' } }}>
                                        <div className={`${classes.link} ${(activeElement === 'contatti') ? classes.linkActive : ""}`}>CONTATTI</div>
                                    </Link>
                                </nav>
                                <figure className={classes.logoB2Bmobile} onClick={() => window.open('http://www.codecampus.it/', '', '')} ><img src="/b2b-small.png" /></figure>
                            <figure className={classes.logoCCAmobile} onClick={() => window.open('http://www.codecampus.it/', '', '')} ><img src="/logo-codecampus-scopri.png" /></figure>
                            </div>
                         
                        </div>
                    ) : (
                        <div id="burger" className={classes.burger} onClick={handleClick}>
                            <i aria-hidden className="fas fa-align-right"></i>
                        </div>)}

                </div>
            )
            : (
                <div className={classes.menuContainer} >
                    <figure className={classes.logoCraon} onClick={() => goToPixel(0)} ><img src="/logo-craon.png" /></figure>
                    <nav className={classes.navigation}>
                        <div onClick={() => goToPage('servizi')} className={`${classes.link} ${(activeElement === 'servizi') ? classes.linkActive : ""}`} >SERVIZI</div>
                        <div onClick={() => goToPage('chisiamo')} className={`${classes.link} ${(activeElement === 'chisiamo') ? classes.linkActive : ""}`} >CHI SIAMO</div>
                        <div onClick={() => goToPage('clienti')} className={`${classes.link} ${(activeElement === 'clienti') ? classes.linkActive : ""}`} >CLIENTI</div>
                        <div onClick={() => goToPage('carriere')} className={`${classes.link} ${(activeElement === 'carriere') ? classes.linkActive : ""}`}>AREA CARRIERE</div>
                        <Link href="/assistenza">
                            <div className={`${classes.link} ${(activeElement === 'sezAssistenza') ? classes.linkActive : ""}`} >ASSISTENZA</div>
                        </Link>
                        <div onClick={() => goToPage('contatti')} className={`${classes.link} ${(activeElement === 'contatti') ? classes.linkActive : ""}`}>CONTATTI</div>
                    </nav>
                    <figure className={classes.logoB2B} onClick={() => window.open('http://www.codecampus.it/', '', '')} ><img src="/b2b-small.png" /></figure>
                    <figure className={classes.logoCCA} onClick={() => window.open('http://www.codecampus.it/', '', '')} ><img src="/logo-codecampus-scopri.png" /></figure>
                    {navbar ? (
                        <div className={classes.w100}>
                            <div id="burger" className={classes.burger} onClick={handleClick}>
                                <i aria-hidden className="fas fa-times"></i>
                            </div>
                            <div id="navbarMobile" className={classes.menuContainerMobile}>
                                <nav onClick={handleClick} className={classes.navigationMobile}>
                                    <div onClick={() => goToPage('servizi')} className={`${classes.link} ${(activeElement === 'servizi') ? classes.linkActive : ""}`} >SERVIZI</div>
                                    <div onClick={() => goToPage('chisiamo')} className={`${classes.link} ${(activeElement === 'chisiamo') ? classes.linkActive : ""}`} >CHI SIAMO</div>
                                    <div onClick={() => goToPage('clienti')} className={`${classes.link} ${(activeElement === 'clienti') ? classes.linkActive : ""}`} >CLIENTI</div>
                                    <div onClick={() => goToPage('carriere')} className={`${classes.link} ${(activeElement === 'carriere') ? classes.linkActive : ""}`}>AREA CARRIERE</div>
                                    <Link href="/assistenza">
                                        <div className={`${classes.link} ${(activeElement === 'sezAssistenza') ? classes.linkActive : ""}`} >ASSISTENZA</div>
                                    </Link>
                                    <div onClick={() => goToPage('contatti')} className={`${classes.link} ${(activeElement === 'contatti') ? classes.linkActive : ""}`}>CONTATTI</div>
                                </nav>
                                <figure className={classes.logoB2Bmobile} onClick={() => window.open('http://www.codecampus.it/', '', '')} ><img src="/b2b-small.png" /></figure>
                            <figure className={classes.logoCCAmobile} onClick={() => window.open('http://www.codecampus.it/', '', '')} ><img src="/logo-codecampus-scopri.png" /></figure>
                            </div>
                 
                        </div>


                    ) : (
                        <div id="burger" className={classes.burger} onClick={handleClick}>

                            <i aria-hidden className="fas fa-align-right"></i>
                        </div>
                    )}


                </div>


            )

    );
}
Menu.propTypes = {
    goToPage: PropTypes.func,
    goToPixel: PropTypes.func,
    activeElement: PropTypes.string,
    sezDefault: PropTypes.string,
    pagInterna: PropTypes.bool,
};

export default Menu;