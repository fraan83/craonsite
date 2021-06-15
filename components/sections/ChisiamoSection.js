import React, { useState } from "react";
import classes from "./ChisiamoSection.module.scss";
import Title from "components/title/Title";
import Card from "components/card/Card";
import Image from "next/image";
import InfoNumberText from "components/info-number-text/InfoNumberText";
import { ClassSharp } from "@material-ui/icons";
import Carousel, { consts } from "react-elastic-carousel";
import useWindowSize from 'components/hooks/windowDimension';


const ChisiamoSection = () => {

  const { height, width } = useWindowSize();
  //console.log('larghezza', width);
  var contenutiDaMostrare = 4;
  var paginazione = false;
  var widthImage = 400;
  var heightImage = 400;
  if(width <= 800){
    contenutiDaMostrare = 1
    paginazione = true;
    widthImage = 400;
    heightImage = 400;
  }

  const handler = () => {
    alert("clicked");

  };

  return (
    <div className={`section ${classes.container, classes.chisiamoSection}`} >
      <div className={classes.content}>
        <Title text="Chi Siamo" />
        <div className={classes.pageElements}>
          <div className={classes.chisiamoImage}>
            <Image src="/chi-siamo-s.jpg" height={heightImage} width={widthImage} alt="Chi siamo Immmagine Craon" layout="fixed"/>
          </div>
          <div className={classes.text}>
            <strong>CRAON</strong> è un'azienda giovane, dinamica e positiva, che opera in ambito IT attraverso l'utilizzo di tecnologie innovative, soluzioni digital e metodologie di programmazione all'avanguardia.
      

            Nata nel 1998 per iniziativa di un gruppo di professionisti del settore informatico, negli anni è cresciuta sia nel settore dello sviluppo di soluzioni <b> <i>tailor made</i> </b>per i propri clienti, sia nel campo della consulenza a 360°: programmazione e sviluppo sia lato Back End che lato Front End, gestione di infrastrutture sistemistiche, <b><i>problem solving</i></b>.
    
            <br></br>
            Craon costruisce progressivamente la propria competitività sul mercato IT attraverso alcuni semplici  <i><b>driver</b></i>:
            <br></br>
            <ul className={classes.clist}>
              <li>Processi decisionali snelli e veloci;</li>
              <li>Selezione accurata delle professionalità, accompagnata dalla condivisione responsabile degli obiettivi e da un patto di collaborazione e valorizzazione delle competenze del team;</li>
              <li>Flessibilità rispetto alle esigenze dei clienti e del mercato;</li>
              <li>Volontà di instaurare relazioni di lungo periodo con i clienti da un lato e con i membri della squadra dall’altro;</li>
              <li>Ampliamento delle aree di business attraverso la partecipazione societaria con strutture specializzate in settori specifici.</li>
            </ul>
 
            Queste caratteristiche fanno di Craon un partner ideale per accompagnare i clienti nella digitalizzazione della loro attività, e nella modernizzazione delle soluzioni di gestione dei processi di Information technology.
            </div>
        </div>
      </div>
      <div className={classes.bottomInfo}>
        <div className={classes.content}>
 
 
   

            <InfoNumberText plus="+" number="100000" percent="" text="giornate di consulenza" />

            <InfoNumberText plus="" number="23" percent="" text="anni di esperienza" />

            <InfoNumberText plus="+" number="10000" percent="" text="ore di formazione interna" />

            <InfoNumberText plus="" number="93" percent="%" text="customer fidelity" />
 
        </div>
      </div>
      {/* <div className={classes.gradient}>              
        </div> */}
    </div>

  );
};





export default ChisiamoSection;
