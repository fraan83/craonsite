import React, {useEffect} from "react";
import { useRouter } from 'next/router';
import classes from "./ServiziSection.module.scss";
import Title from "components/title/Title";
import CardServizi from "components/card-servizi/Card";
import Image from 'next/image';
import Link from 'next/link';

const ServiziSection = (sezDefault) => {

    const router = useRouter();
 
  
    return( 
        <div   className={`section ${classes.sectionServizi} `} >           
            <div className={classes.content}>
                <Title className={classes.titleSection} text="I Nostri Servizi" />

                <div className={classes.cardGrid}>
                    <div className={classes.cardContainer}>
                        <CardServizi title="App Mobile"
                      
                            showButton={true} buttonText="scopri" 
                            onClick={() => router.push('/servizi/Appmobile')}
                          
                            > 
                            <Image src="/servizi/app_mobile.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="DataBase Management"
                           onClick={() => router.push('/servizi/DatabaseManagement')}
                            showButton={true} buttonText="scopri" 
                          
                            >
                            <Image src="/servizi/db_management.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="Enterprise Resource Planning"                            
                            showButton={true} buttonText="scopri" 
                            onClick={() => router.push('/servizi/Enterprise')}
                         
                            >
                            <Image src="/servizi/erp.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="IT Security"     
                             onClick={() => router.push('/servizi/Itsecurity')}              
                            showButton={true} buttonText="scopri" 
                            >
                            <Image src="/servizi/it_security.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>                    <div className={classes.cardContainer}>
                        <CardServizi title="Sviluppo Software"
                               onClick={() => router.push('/servizi/SviluppoSoftware')}   
                            showButton={true} buttonText="scopri" 
                            >
                            <Image src="/servizi/sviluppo_software.jpg"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                    <div className={classes.cardContainer}>
                        <CardServizi title="System Integration"  
                        href="/servizi_Enterprise"                      
                            showButton={true} buttonText="scopri" 
                            onClick={() => router.push('/servizi/SystemIntegration')}   
                            >
                            <Image src="/servizi/system_integration_mc.png"  width={330} height={207}  alt="image" />
                        </CardServizi>
                    </div>
                </div>
            </div> 
     
        </div>
    );
}

export default ServiziSection;