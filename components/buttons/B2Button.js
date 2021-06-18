import React from "react";
import PropTypes from "prop-types";
import classes from "../../styles/Servizi.module.scss";

const B2Button = ({text, onClick, ...params}) => { 
    if(onClick)
        return( <button  onClick={()=> onClick()}  className={classes.button} {...params}>{text}</button>);
    else 
        return( <button  className={classes.button}  {...params}>{text}</button>);
}

B2Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

B2Button.defaultProps = {
    text: "SCOPRI IL NOSTRO E-COMMERCE",
};

export default B2Button;