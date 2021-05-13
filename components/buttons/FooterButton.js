import React from "react";
import PropTypes from "prop-types";


const FooterButton = ({text, onClick,children, ...params}) => {
    return( <button  onClick={()=> onClick()}  className="footerButton" {...params}>{children}{text}</button>);
}

FooterButton.propTypes = {
    children: PropTypes.node,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

FooterButton.defaultProps = {
    text: "INVIA",
};

export default FooterButton;