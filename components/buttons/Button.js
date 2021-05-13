import React from "react";
import PropTypes from "prop-types";

const Button = ({text, onClick, ...params}) => { 
    if(onClick)
        return( <button  onClick={()=> onClick()}  className="button" {...params}>{text}</button>);
    else 
        return( <button  className="button" {...params}>{text}</button>);
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    text: "INVIA",
};

export default Button;