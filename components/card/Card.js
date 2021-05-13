import React from "react";
import classes from "./Card.module.scss"
import PropTypes from "prop-types";
import SmallButton from "components/buttons/SmallButton";


const Card = ({children, title, text, showButton, buttonText, onClick}) => {
    return(
        <div   className={classes.container}>
           {children}
            <div  className={classes.content}> 
                <h2 className={classes.title}>{title}</h2>
                <p  className={classes.text}>{text}</p>
                {showButton && <SmallButton text={buttonText} onClick={onClick} />}                
            </div>        
        </div>
    );
}
 
Card.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    showButton: PropTypes.bool,
    buttonText: PropTypes.string,
    onClick: PropTypes.func,    
};

Card.defaultProps = {
    showButton: false
};

export default Card;