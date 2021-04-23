import React from "react";
import classes from "./CarriereSection.module.scss";
import Title from "components/title/Title";
import Carousel, { consts } from "react-elastic-carousel";
import Image from "next/image";
import CarrieraCard from "components/card-carriera/Card";

const CarriereSection = () => {
  const handler = () => {
    alert("clicked");
  };

  return (
    <div className={`section ${classes.container}`}>
      <div className={classes.content}>
        <Title text="Area Carriere" />
        <p className={`subtitle ${classes.text}`}>
          Sei alla ricerca di nuove sfide?
          <br />
          Sei pronto/a ad iniziare un nuovo percorso professionale?
          <br />
          CRAON può offrirti l’opportunità che stai cercando
        </p>
        <Carousel itemsToShow={4}  enableAutoPlay autoPlaySpeed={3750}>
        <CarrieraCard
            title="Senior front end developer"
            location="Veduggio con colzano"
            data="04/03/2021"
            showButton={true}
            buttonText="vedi"
            onClick={handler}
          />
        <CarrieraCard
            title="Senior developer Angular"
            location="Vimercate"
            data="10/05/2021"
            showButton={true}
            buttonText="vedi"
            onClick={handler}
          />
        <CarrieraCard
            title="Full stack developer"
            location="Rancate"
            data="09/04/2021"
            showButton={true}
            buttonText="vedi"
            onClick={handler}
          />
         <CarrieraCard
            title="Back end Junior Developer"
            location="Milano"
            data="15/04/2021"
            showButton={true}
            buttonText="vedi"
            onClick={handler}
          />
          <CarrieraCard
            title="Junior project manager"
            location="Rancate"
            data="09/04/2021"
            showButton={true}
            buttonText="vedi"
            onClick={handler}
          />
        <CarrieraCard
            title="Google marketing manager"
            location="Sesto San Giovanni"
            data="22/01/2021"
            showButton={true}
            buttonText="vedi"
            onClick={handler}
          />
         <CarrieraCard
            title="Senior front end developer"
            location="Veduggio con colzano"
            data="04/03/2021"
            showButton={true}
            buttonText="vedi"
            onClick={handler}
          />
        <CarrieraCard
            title="Senior developer Angular"
            location="Vimercate"
            data="10/05/2021"
            showButton={true}
            buttonText="vedi"
            onClick={handler}
          />
        <CarrieraCard
            title="Full stack developer"
            location="Rancate"
            data="09/04/2021"
            showButton={true}
            buttonText="vedi"
            onClick={handler}
          />
        <CarrieraCard
            title="Google marketing manager"
            location="Sesto San Giovanni"
            data="22/01/2021"
            showButton={true}
            buttonText="vedi"
            onClick={handler}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default CarriereSection;
