import React from "react";
import PropTypes from "prop-types";
import classes from "./header-pagina-interna.module.scss";

const HeaderPaginaInterna = ({title, subtitle}) => {
    return( 

        <div className={classes.sectionImg}>
              <div className={classes.headerTitle}>{title}</div>
              <div className={classes.headerSubtitle}>{subtitle}</div>
        </div>
    ); 
}
 
HeaderPaginaInterna.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

export default HeaderPaginaInterna;