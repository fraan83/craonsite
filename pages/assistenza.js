import Link from 'next/link'
import React from "react";
import classes from "../styles/AssistenzaPage.module.scss" 
import Title from "components/title/Title";
import Menu from "components/Menu/Menu"
import Image from 'next/image'
import Footer from "components/footer/Footer" 

const Assistenza = () => {
  const handler = () => {
    alert("clicked");
  };

  return ( 
      <div  className="internaContainer" >
        <Menu  activeElement={"sezAssistenza"}  pagInterna={true}  />
        <Link href={{ pathname: '/', query: { section: 'chisiamo' } }}><a>path</a></Link>
        <section  className={`section ${classes.section} `} >  
        <div className={classes.content}>
          <Title text="Assistenza" />
          <div className={classes.pageElements}> 
              <div className={classes.defImage}>
                  <Image src="/chi_siamo.jpg"  width={450} height={319}  alt="image" />
              </div> 
              <div className={classes.text}> 
                <strong>Curabitur arcu erat</strong>, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Vestibulum</strong> ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. 
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.<br /><br /> <strong>Nulla porttitor accumsan tincidunt</strong>. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque.Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh.
              </div>             
          </div> 
          </div>
        </section>
        <Footer   pagInterna={true} />
      </div>
    
  );
};

export default Assistenza;
