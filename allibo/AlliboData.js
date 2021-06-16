import React, { useEffect, useState } from "react";
import axios from 'axios';
import CarrieraCard from '../components/card-carriera/Card';
import Carousel, { consts } from "react-elastic-carousel";
const AlliboDati = () => {


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

    return (
        <>
            <Carousel itemsToShow={4} enableAutoPlay autoPlaySpeed={3750}>
                {
                    jobs && jobs.map((j) => {
                        return (

                            <CarrieraCard
                                key={j.DetailLink}
                                title={j.Title}
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

