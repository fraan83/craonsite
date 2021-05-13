import React from "react";
import PropTypes from "prop-types";

const Subtitle = ({text}) => {
    return( <h4  className="subtitle">{text}</h4>); 
}
 
Subtitle.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Subtitle;