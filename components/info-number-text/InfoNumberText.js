import React from "react";
import classes from "./InfoNumberText.module.scss"
import PropTypes from "prop-types";
import AnimatedNumber from "animated-number-react";


const InfoNumberText = ({ plus, number, percent, text }) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }


    return (
        <div className={classes.container}>

            <h3 className={classes.infoNumber} >{plus}
                <AnimatedNumber
                    value={number}
                    formatValue={(number) => numberWithCommas(number.toFixed(0))}
                    duration={3500}

                />
                {percent}
            </h3>

            <div className={classes.infoText}>{text}
            </div>
        </div>
    );
}

InfoNumberText.propTypes = {
    number: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    plus: PropTypes.string,
    percent: PropTypes.string,

};




export default InfoNumberText;

