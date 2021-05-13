import React from "react";
import classes from "./Card.module.scss"
import PropTypes from "prop-types";
import SmallButton from "components/buttons/SmallButton";


const CardServizi = ({children, title, showButton, buttonText, onClick}) => {

    return(
        <div   className={classes.container}>
           {children}
            <div  className={classes.content}> 
                <h2 className={classes.title}>{title}</h2>
                {showButton && <SmallButton text={buttonText} onClick={onClick} />}                
            </div>        
        </div>
    );
}
 
CardServizi.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    showButton: PropTypes.bool,
    buttonText: PropTypes.string,
    onClick: PropTypes.func,    
};

CardServizi.defaultProps = {
    showButton: false
};

export default CardServizi;