import React from "react";
import PropTypes from "prop-types";
import classes from 'components/title/Title.module.scss';

const Title = ({text}) => {
    return( <div className={classes.titleSection} >{text}</div>); 
}
 
Title.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Title;