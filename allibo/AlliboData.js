import React, { useEffect, useState } from "react";
import axios from 'axios';
import CarrieraCard from '../components/card-carriera/Card';
import Carousel, { consts } from "react-elastic-carousel";
import useWindowSize from 'components/hooks/windowDimension';
import Link from 'next/link';


const AlliboDati = () => {

    const [intro, setIntro] =  useState('')
    const [jobs, setJobs] = useState([{
        StyleClass:'', // 
        Job: '',
        Title: '',
        StyleClass: '', //
        JobLocation: '', //
        LabelPlace: '', //
        DetailLink: '', //
        CountryName: '', //
        ProvinceName: '',
        ListPlaces: [
            {
                CountryName: '',
                ProvinceName:''
            }
        ]
    }])


    useEffect(() => {
        axios.get('https://joblink.allibo.com/ats4/Widget/connector.aspx?DM=AkAgVVF3SaayKyCyStg6S9qATVXtJSr6vSo3gHErQrg%3D&SG=2&FT=481&LN=IT')
            .then(res => {
                // console.log(res.data.Content.WidgetData.AdsList);
                let listaLavori = res.data.Content.WidgetData.AdsList
                setJobs(listaLavori)
                let introduzione = res.data.Content.WidgetData.Intro
                setIntro(introduzione);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

   // console.log('jobs', jobs)

    const gotJob = (link) => {
        //e.preventDefault();
        window.open(link, '_blank');

    }


    const { height, width } = useWindowSize();
    //console.log('larghezza', width);
    var contenutiDaMostrare = 4;
    var arrows = false;
    var widthImage = 400;
    var heightImage = 400;
    var paginazione = true
    if(width <= 800){
      contenutiDaMostrare = 1
      arrows = true;
      widthImage = 400;
      heightImage = 400;
      paginazione = false;
    }
  

    return (
        <>
        <p style={{textAlign: 'center', color: '#696259', fontWeight: '400', margin: '10px'}}>{intro}</p>
            <Carousel showArrows={arrows} pagination={paginazione} itemsToShow={contenutiDaMostrare} enableAutoPlay autoPlaySpeed={3750}>
                {
                    jobs && jobs.map((j) => {
                        return (

                            <CarrieraCard
                                key={j.DetailLink}
                                title={j.Title}
                                titleLink={j.DetailLink}
                                data={j.Job}
                                location={j.ListPlaces[0].CountryName + ' / ' + j.ListPlaces[0].ProvinceName}
                                showButton={true}
                                buttonText="invia cv"
                                onClick={() => gotJob(j.DetailLink)}
                            />
                        )

                    })
                }
            </Carousel>
        </>
    )
}

export default AlliboDati

