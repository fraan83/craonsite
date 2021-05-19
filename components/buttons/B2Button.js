import React from "react";
import PropTypes from "prop-types";

const B2Button = ({text, onClick, ...params}) => { 
    if(onClick)
        return( <button  onClick={()=> onClick()}  className="button" {...params}>{text}</button>);
    else 
        return( <button  className="button" {...params}>{text}</button>);
}

B2Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

B2Button.defaultProps = {
    text: "SCOPRI I NOSTRI SERVIZI B2B",
};

export default B2Button;