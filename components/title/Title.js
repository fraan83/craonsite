import React from "react";
import PropTypes from "prop-types";

const Title = ({text}) => {
    return( <h2  className="titleSection">{text}</h2>); 
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Title;