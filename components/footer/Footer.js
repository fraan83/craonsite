import React from "react";
import classes from "./Footer.module.scss";
import Image from "next/image";
import PropTypes from "prop-types";
import FooterButton from "components/buttons/FooterButton";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from 'next/link'
 
const Footer = ({goToPage, pagInterna}) => {
    const handler = () => {
        
    }

    return(
        <div className={classes.container}>
          <div className={classes.content}>
            <div>
            {(pagInterna) ?
               ( <ul className={classes.sitemap}>
                     <Link href={{ pathname: '/', query: { section: 'servizi' } }}><li>Servizi</li></Link>
                     <Link href={{ pathname: '/', query: { section: 'chisiamo' } }}><li>Chi Siamo</li></Link>
                     <Link href={{ pathname: '/', query: { section: 'clienti' } }}><li>Clienti</li></Link>
                     <Link href={{ pathname: '/', query: { section: 'carriere' } }}><li>Area Carriere</li></Link>
                     <Link href="/assistenza"><li>Assistenza</li></Link>
                     <Link href={{ pathname: '/', query: { section: 'contatti' } }}><li>Contatti</li></Link>
                </ul>)
            :  (
                <ul className={classes.sitemap}>
                <li onClick={() => goToPage('servizi')}>Servizi</li>
                <li onClick={() => goToPage('chisiamo')}>Chi Siamo</li>
                <li onClick={() => goToPage('clienti')}>Clienti</li>
                <li onClick={() => goToPage('carriere')}>Area Carriere</li>
                    <Link href="/assistenza"><li>Assistenza</li></Link>
                <li onClick={() => goToPage('contatti')}>Contatti</li>
            </ul>)
            } 
               
            </div>
            <div>
                <strong className={classes.title}>Craon SRL</strong>
                <p  className={classes.info}>
                    Via Bice Cremagnani, 16<br /> 
                    20871 Vimercate (MB)<br /><br />
                    <strong>Partita Iva: </strong> 02820820963<br />
                    <strong>Tel: </strong> 039.6612489<br />
                    <strong>Email: </strong><a href="mailto:info@craon.it">info@craon.it</a>
                </p>
                <ul className={classes.social}  >
                    <li  onClick={() => window.open('https://www.facebook.com/craonIT','','')} ><img src="/logo-fb-grey.png" /></li>
                    <li  onClick={() => window.open('https://twitter.com/Craonsrl','','')} ><img src="/logo-tw-grey.png" /></li>
                    <li  onClick={() => window.open('https://www.linkedin.com/company/craonsrl','','')} ><img src="/logo-linkedin-grey.png" /></li>
                </ul>
            </div>
            <div>
                <div  className={classes.infoRight}>
                    <Image src="/logo-iqnet.png"  width={117} height={44}  alt="image" />
                   ISO 9001:2015<br />
                   Quality Management System<br />
                   <FooterButton text="AREA RISERVATA" onClick={()=>  window.open('http://statini.craon.it/','','') }><LockOutlinedIcon /></FooterButton>
                   <FooterButton text="WEBMAIL" onClick={()=>  window.open('http://webmail.craon.it/appsuite/','','')} ><MailOutlineIcon /></FooterButton>
                </div>
            </div>
          </div>
          <div className={classes.contentBottom}>
              <span>© Craon srl 2021 - Tutti i diritti riservati</span>
          </div>
        </div>);
    } 

     
Footer.propTypes = {
    goToPage: PropTypes.func,    
};

export default Footer;