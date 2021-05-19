import React from "react";
import classes from "./HomeSection.module.scss";
import Button from "components/buttons/Button";
import PropTypes from "prop-types";
import B2Button from "components/buttons/B2Button";
import { useRouter } from 'next/router';
import SocialLinks from "components/social/socialLink";

const HomeSection = ({ goToPage }) => {
    const router = useRouter();
    return (

        <div className={classes.container}>
            <div className={classes.textContainer}>
                <div className={classes.content}>
                    <h2 className={classes.payoff}>Realizziamo</h2>
                    <p className={classes.payoffText}>i tuoi progetti</p>
                    <p className={classes.payoffDescription} >
                        I servizi offerti da Craon sono molteplici: si va dalla progettazione, realizzazione e gestione di sistemi informativi allo sviluppo di software, portali web e applicazioni mobile.
                        Un’azienda informatica a 360° che rivolge i propri servizi sia alle PMI, con prodotti specialistici “on demand”, sia alle grandi aziende del settore bancario e finanziario, che ricercano attraverso l’outsourcing dei propri progetti una maggiore flessibilità.
                    </p>

                    <Button text="contattaci" onClick={() => goToPage('contatti')} />
                </div>


            </div>
            <div className={classes.socialContainer}>
                <SocialLinks />
            </div>
            <div className={classes.payoffB2b}>
                <B2Button text="E-commerce B2B" onClick={() => router.push('/servizi/B2B')} />
            </div>

        </div>
    );
}

HomeSection.propTypes = {
    goToPage: PropTypes.func
};

export default HomeSection;