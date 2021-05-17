import React from "react";
import classes from "./InfoNumberText.module.scss"
import PropTypes from "prop-types";


const InfoNumberText = ({number, text}) => {
   
    
    return(
        <div className={classes.container}>            
            <h3 className={classes.infoNumber} >
             {number}
            </h3>
            <div  className={classes.infoText}>{text}
            </div>      
        </div>
    );
}
 
InfoNumberText.propTypes = {
    number: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,  
  
};

export default InfoNumberText;

 