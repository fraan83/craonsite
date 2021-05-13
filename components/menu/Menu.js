import React, {useEffect} from "react";
import classes from "./Menu.module.scss";
import PropTypes from "prop-types";
import Link from 'next/link'

 
const Menu = ({goToPage, goToPixel, activeElement, sezDefault, pagInterna}) => {
    //console.log("SEZ DEFAULT:"+sezDefault);
    useEffect(()=>{
        if(!!sezDefault)
            goToPage(sezDefault);
    },[]);
    return(
        (pagInterna) ?
               ( 
                <div className={classes.menuContainer} >
                <Link href={{ pathname: '/' }}>
                    <figure className={classes.logoCraon}   ><img src="/logo-craon.png" /></figure>
                </Link>
                <nav  className={classes.navigation}>
                    <Link href={{ pathname: '/', query: { section: 'servizi' } }}>
                         <div  className={`${classes.link} ${(activeElement === 'servizi') ? classes.linkActive : "" }`} >SERVIZI</div>
                    </Link>
                    <Link href={{ pathname: '/', query: { section: 'chisiamo' } }}>
                        <div className={`${classes.link} ${(activeElement === 'chisiamo') ? classes.linkActive : "" }`}>CHI SIAMO</div>
                    </Link>
                    <Link href={{ pathname: '/', query: { section: 'clienti' } }}>
                        <div className={`${classes.link} ${(activeElement === 'clienti') ? classes.linkActive : "" }`} >CLIENTI</div>
                    </Link>
                    <Link href={{ pathname: '/', query: { section: 'carriere' } }}>
                        <div className={`${classes.link} ${(activeElement === 'carriere') ? classes.linkActive : "" }`}>AREA CARRIERE</div>
                    </Link>
                    <Link href="/assistenza">
                        <div  className={`${classes.link} ${(activeElement === 'sezAssistenza') ? classes.linkActive : "" }`} >ASSISTENZA</div>
                    </Link> 
                    <Link href={{ pathname: '/', query: { section: 'contatti' } }}>
                        <div className={`${classes.link} ${(activeElement === 'contatti') ? classes.linkActive : "" }`}>CONTATTI</div>
                    </Link>
                </nav>
                <figure  className={classes.logoCCA}  onClick={() => window.open('http://www.codecampus.it/','','')} ><img src="/logo-codecampus-scopri.png" /></figure>
                </div>
                )
            :  ( 
                <div className={classes.menuContainer} >
                    <figure className={classes.logoCraon}  onClick={() => goToPixel(0)} ><img src="/logo-craon.png" /></figure>
                    <nav  className={classes.navigation}>
                        <div  onClick={() => goToPage('servizi')} className={`${classes.link} ${(activeElement === 'servizi') ? classes.linkActive : "" }`} >SERVIZI</div>
                        <div  onClick={() => goToPage('chisiamo')}  className={`${classes.link} ${(activeElement === 'chisiamo') ? classes.linkActive : "" }`} >CHI SIAMO</div>
                        <div  onClick={() => goToPage('clienti')}  className={`${classes.link} ${(activeElement === 'clienti') ? classes.linkActive : "" }`} >CLIENTI</div>
                        <div  onClick={() => goToPage('carriere')}  className={`${classes.link} ${(activeElement === 'carriere') ? classes.linkActive : "" }`}>AREA CARRIERE</div>
                        <Link href="/assistenza">
                            <div  className={`${classes.link} ${(activeElement === 'sezAssistenza') ? classes.linkActive : "" }`} >ASSISTENZA</div>
                        </Link> 
                        <div  onClick={() => goToPage('contatti')} className={`${classes.link} ${(activeElement === 'contatti') ? classes.linkActive : "" }`}>CONTATTI</div>
                    </nav>
                    <figure  className={classes.logoCCA}  onClick={() => window.open('http://www.codecampus.it/','','')} ><img src="/logo-codecampus-scopri.png" /></figure>
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