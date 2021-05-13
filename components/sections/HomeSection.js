import React from "react";
import classes from "./HomeSection.module.scss"
import Button from "components/buttons/Button"
import PropTypes from "prop-types";

const HomeSection = ({goToPage}) => {
    return(
        <div   className={classes.container}>
            <div   className={classes.textContainer}>
                <div className={classes.content}> 
                    <h2  className={classes.payoff}>Realizziamo</h2>
                    <p  className={classes.payoffText}>i tuoi progetti</p>
                    <Button text="contattaci" onClick={() => goToPage('contatti')}  />
                </div>
            </div>        
        </div>
    );
}

HomeSection.propTypes = {
    goToPage: PropTypes.func  
};

export default HomeSection;