import Link from 'next/link'
import React from "react";
import classes from "../styles/AssistenzaPage.module.scss";
import Title from "components/title/Title";
import Subtitle from 'components/subtitle/subtitle';
import Menu from "components/menu/Menu";
import Image from 'next/image';
import Footer from "components/footer/Footer";
 
import HeaderPaginaInterna from 'components/header-pagina-interna/header-pagina-interna';
import FormAssistenza from 'components/form-assistenza/form-assistenza';
import Button from 'components/buttons/Button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const Assistenza = () => {
  const handler = () => {
    alert("clicked");
  };


  const linkTmWin = () => {
    window.open("http://eventi.elmec.com/docscaricabili/TeamViewerQS_it-idcz23w425.exe");
  }
  const linkTmMac = () => {
    window.open("http://eventi.elmec.com/docscaricabili/TeamViewerQS-2.zip");
  }

  return (
    <div className="internaContainer" >
      <Menu activeElement={"sezAssistenza"} pagInterna={true} />
      <Link href={{ pathname: '/', query: { section: 'chisiamo' } }}><a>path</a></Link>
      <section className={`section ${classes.section} `} >
        <HeaderPaginaInterna title="Come possiamo aiutarti?"
          subtitle="I nostri servizi di assistenza sono attivi 24 ore su 24." />
        <div className={classes.content}>

          <div className={classes.pageElements}>
            <div className={classes.defImage}>
              <FormAssistenza title="Contatta i nostri assistenti" icon="./call-center.svg" />
            </div>
            <div className={classes.text}>
              <div className={classes.titleContact}> Contact Center</div>
              <div className={classes.textContact}>
              <WhatsAppIcon /> &nbsp;  <label>+39 039.6612489</label>
                  </div>
              <div className={classes.titleContact}> Supporto da remoto</div>
              <div className={classes.textRemote}>
                Scarica la versione di Team Viewer per il tuo sistema operativo per consentire ai nostri tecnici dell'Helpdesk di operare da remoto sul tuo dispositivo PC o Apple
                  <br></br>
                <br></br>
                <Button text="Assistenza remota (win)" onClick={linkTmWin}></Button>
                <br></br>
                <br></br>
                <Button text="Assistenza remota (mac)" onClick={linkTmMac}></Button>
              </div>
            </div>
          </div>
          <div className={classes.pageElements}>
          </div>
        </div>
      </section>
      <Footer pagInterna={true} />
    </div>

  );
};

export default Assistenza;
