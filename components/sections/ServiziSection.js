import React from "react"
import classes from "./ServiziSection.module.scss"
import Title from "components/title/Title"
import CardServizi from "components/card-servizi/Card"
import Image from 'next/image'


const ServiziSection = () => {
    const handler = () => {
        alert("clicked");
    }
    return( 
        <div   className={`section ${classes.sectionServizi} `} >           
            <div className={classes.content}>
                <Title text="Servizi" />

                <div className={classes.cardGrid}>
                    <div className={classes.cardContainer}>
                        <CardServizi title="App Mobile"
                            
                            showButton={true} buttonText="scopri" 
                            onClick={handler}
                            > 
                            <Image src="/servizi/app_mobile.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="DataBase Management"
                            
                            showButton={true} buttonText="scopri" 
                            onClick={handler}
                            >
                            <Image src="/servizi/db_management.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="Enterprise Resource Planning"                            
                            showButton={true} buttonText="scopri" 
                            onClick={handler}
                            >
                            <Image src="/servizi/erp.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="IT Security"                            
                            showButton={true} buttonText="scopri" 
                            onClick={handler}
                            >
                            <Image src="/servizi/it_security.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>                    <div className={classes.cardContainer}>
                        <CardServizi title="Sviluppo Software"
                            
                            showButton={true} buttonText="scopri" 
                            onClick={handler}
                            >
                            <Image src="/servizi/sviluppo_software.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="System Integration"                            
                            showButton={true} buttonText="scopri" 
                            onClick={handler}
                            >
                            <Image src="/servizi/system_integration.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                </div>
            </div> 
            <div className="barGrey"></div> 
        </div>
    );
}

export default ServiziSection;