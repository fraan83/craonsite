import React, { useEffect, useState } from 'react';
import classes from "./CarriereSection.module.scss";
import Title from "components/title/Title";
import Carousel, { consts } from "react-elastic-carousel";
import Image from "next/image";
import CarrieraCard from "components/card-carriera/Card";
import AlliboDati from '../../allibo/AlliboData';






const CarriereSection = ({ attivo }) => {
 
  if(attivo === 'carriere'){
  
    // location.reload(false);
 
  }
 
  var scriptAllibo = '<script src="https://joblink.allibo.com/ats4/Widget/jq"></script>' +
    '<script src="https://joblink.allibo.com/ats4/Widget/js"></script>' +
    '<a href="https://allibo.com" data-allibo="https://joblink.allibo.com/ats4/Widget/connector.aspx?DM=AkAgVVF3SaayKyCyStg6S9qATVXtJSr6vSo3gHErQrg%3D&SG=2&FT=481&LN=IT"rel="follow" style="text-decoration:none; cursor:default">-</a>';
  //console.log('attivo', attivo)

 

  return (
    <div className={`section ${classes.container}`} >
      <Title text="Area Carriere" />
      <div className={classes.bgcontainer}>
        <div className={classes.content}>
          <AlliboDati />
        {/* <div  dangerouslySetInnerHTML={{ __html: scriptAllibo }}></div> */}
        </div>
      </div>
    </div>
  );
};

export default CarriereSection;

 
