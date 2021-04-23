import React from "react";
import PropTypes from "prop-types";

const SmallButton = ({text, onClick, ...params}) => {
    if(onClick)
        return( <button  onClick={()=> onClick()}  className="smallButton" {...params}>{text}</button>);
    else 
        return( <button  className="smallButton" {...params}>{text}</button>);
}

SmallButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

SmallButton.defaultProps = {
    text: "INVIA",
};

export default SmallButton;