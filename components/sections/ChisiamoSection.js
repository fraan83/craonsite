import React from "react";
import classes from "./ChisiamoSection.module.scss";
import Title from "components/title/Title";
import Card from "components/card/Card";
import Image from "next/image";
import InfoNumberText from "components/info-number-text/InfoNumberText";

const ChisiamoSection = () => {
  const handler = () => {
    alert("clicked");
  };

  return ( 
    <div  className={`section ${classes.container}`} >
      <div className={classes.content}>
        <Title text="Chi Siamo" />
        <div className={classes.pageElements}> 
            <div className={classes.chisiamoImage}>
                <img src="/chisiamo.jpg"  alt="image"  />
            </div> 
            <div className={classes.text}>
            <strong>CRAON</strong> è un’azienda informatica e di sviluppo software nata nel 1998 grazie ad un team composto da professionisti del settore informatico, opera in ambito IT attraverso l'utilizzo di tecnologie innovative, soluzioni digital e metodologie di programmazione all'avanguardia.
            <br />
            <br />
            La coerenza delle scelte e l’acquisizione continua di competenze secondo processi decisionali snelli e veloci sono le semplici regole sulle quali si costruisce la competitività di CRAON attraverso:
            <br />
            - Selezione accurata di professionalità;
            <br />
            - Partecipazioni societarie con strutture specializzate in aree di nicchia;
            <br />
            - Flessibilità rispetto alle esigenze dei clienti e del mercato;
            <br /> <br />
            Un'azienda giovane, dinamica e positiva in cui la crescita del business è il naturale corollario di uno stretto patto di collaborazione con i dipendenti e della condivisione responsabile degli obiettivi.
            </div>             
        </div> 
      </div>
      <div className={classes.bottomInfo}>
          <div className={classes.content}>
              <InfoNumberText number="105" text="clienti affiancati nel 2020" />
              <InfoNumberText number="84" text="contratti stipulati nel 2020" />
              <InfoNumberText number="90%" text="di feedback positivi" />
              <InfoNumberText number="34" text="corsi di formazione" /> 
          </div>
       </div>
        {/* <div className={classes.gradient}>              
        </div> */}
    </div>
    
  );
};

export default ChisiamoSection;
