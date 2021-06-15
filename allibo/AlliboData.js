import React, { useEffect } from "react";


const AlliboDati = (jobs) =>  {
    
 console.log('jobs',  jobs);
    return(
        <>
            <div>
            
            </div>
        </>
    )
}

export default AlliboDati

export async function getStaticProps(context) {
    const res = await fetch(`https://joblink.allibo.com/ats4/Widget/connector.aspx?DM=AkAgVVF3SaayKyCyStg6S9qATVXtJSr6vSo3gHErQrg%3D&SG=2&FT=481&LN=IT`)
    .then(response => response.json())
    .then(data => console.log(data));
    //const data = await res.json()
   
 
    return {
      
      props: { jobs:  data.Content.WidgetData }, // will be passed to the page component as props
    }
  }