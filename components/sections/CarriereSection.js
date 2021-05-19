import React, { useEffect, useState } from 'react';
import classes from "./CarriereSection.module.scss";
import Title from "components/title/Title";
import Carousel, { consts } from "react-elastic-carousel";
import Image from "next/image";
import CarrieraCard from "components/card-carriera/Card";




const CarriereSection = () => {

  var scriptAllibo = '<div id="AlliboList">' +
    '<a href="https://www.allibo.com?src=joblist" style="cursor:default" rel="follow" target="_blank">' +
    '<img src="https://joblink.allibo.com/ats4/www_lib/load.gif" style="border:none" alt="" />' +
    '</a>' +
    '</div>' +
    '<script src="https://joblink.allibo.com/ats4/connector.aspx?DM=1395&DMN=7uJ2s.7Q53mWs.SgA85T&SG=2&FT=22&LN=IT"></script>';
  const handler = () => {
    alert("clicked");
  };


  return (
    <div className={`section ${classes.container}`}>
      <Title text="Area Carriere" />
      <div className={classes.bgcontainer}>
        <div className={classes.content}>
          <div dangerouslySetInnerHTML={{ __html: scriptAllibo }}></div>
        </div>
      </div>
    </div>
  );
};

export default CarriereSection;
