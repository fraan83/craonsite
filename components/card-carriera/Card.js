import React from "react";
import classes from "./Card.module.scss"
import PropTypes from "prop-types";
//import SmallButton from "components/buttons/SmallButton";
import Button from "components/buttons/Button";


const CarrieraCard = ({children, title, titleLink, location, data, showButton, buttonText, onClick}) => {
    return(
        <div   className={classes.container}>
           {children}
            <div  className={classes.content}> 
                <a href={titleLink} target="_blank"> <h2 className={classes.title}>{title}</h2></a>
                <p  className={classes.location}>{location}</p>
                <p  className={classes.data}>{data}</p>
                {showButton && <Button text={buttonText} onClick={onClick} className={classes.button} />}                
            </div>        
        </div>
    );
}
 
CarrieraCard.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    titleLink: PropTypes.string,
    location: PropTypes.string,
    data: PropTypes.string.isRequired,
    showButton: PropTypes.bool,
    buttonText: PropTypes.string,
    onClick: PropTypes.func,    
};

CarrieraCard.defaultProps = {
    showButton: false
};

export default CarrieraCard;