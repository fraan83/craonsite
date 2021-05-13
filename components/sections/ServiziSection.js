import React, {useEffect} from "react";
import { useRouter } from 'next/router'
import classes from "./ServiziSection.module.scss"
import Title from "components/title/Title"
import CardServizi from "components/card-servizi/Card"
import Image from 'next/image'
import Link from 'next/link';

const ServiziSection = (sezDefault) => {

    const router = useRouter();

    const routeChange = (e) => {
        console.log(e);
        /*router.push(href)*/
      }
    
    const handler = (e) => {
        console.log(e);
    }
  
    return( 
        <div   className={`section ${classes.sectionServizi} `} >           
            <div className={classes.content}>
                <Title text="Servizi" />

                <div className={classes.cardGrid}>
                    <div className={classes.cardContainer}>
                        <CardServizi title="App Mobile"
                      
                            showButton={true} buttonText="scopri" 
                            onClick={() => router.push('/servizi_Appmobile')}
                          
                            > 
                            <Image src="/servizi/app_mobile.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="DataBase Management"
                           onClick={() => router.push('/servizi_DatabaseManagement')}
                            showButton={true} buttonText="scopri" 
                          
                            >
                            <Image src="/servizi/db_management.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="Enterprise Resource Planning"                            
                            showButton={true} buttonText="scopri" 
                            onClick={() => router.push('/servizi_Enterprise')}
                         
                            >
                            <Image src="/servizi/erp.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="IT Security"     
                             onClick={() => router.push('/servizi_Itsecurity')}              
                            showButton={true} buttonText="scopri" 
                            >
                            <Image src="/servizi/it_security.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>                    <div className={classes.cardContainer}>
                        <CardServizi title="Sviluppo Software"
                               onClick={() => router.push('/servizi_SviluppoSoftware')}   
                            showButton={true} buttonText="scopri" 
                            >
                            <Image src="/servizi/sviluppo_software.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="System Integration"  
                        href="/servizi_Enterprise"                      
                            showButton={true} buttonText="scopri" 
                            onClick={() => router.push('/servizi_SystemIntegration')}   
                            >
                            <Image src="/servizi/system_integration_mc.png"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                </div>
            </div> 
            <div className="barGrey"></div> 
        </div>
    );
}

export default ServiziSection;