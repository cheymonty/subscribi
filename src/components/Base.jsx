import React from 'react';
import {SiApple, SiPlaystation, SiHulu,SiGooglecalendar, SiHbo,SiNetflix, SiXbox, SiNintendoswitch, SiSpotify, SiAmazon } from "react-icons/si";



const Icon = ({icon, color, name}) => (
   
    <div style={{color:color}}>
         {getLogo(name)} 
         {/* {icon} */}
    </div>
      
);

const preselects = [
    {name: "playstation", logo: <SiPlaystation/>, color: "#006FCD"}, 
    {name: "nintendo", logo:<SiNintendoswitch/>, color: "#E70009"},
    {name: "spotify", logo: <SiSpotify/>, color: "#1ED761"},
    {name: "amazon", logo: <SiAmazon/>, color: "#FF9900"},
    {name: "netflix", logo: <SiNetflix/>, color: "#E50914"}, 
    {name: "hulu", logo: <SiHulu/>, color: "#3DBB3D"},
    {name: "apple", logo: <SiApple/>, color: "#000000"}, 
    {name: "xbox", logo: <SiXbox/>, color: "#107C11"},
    {name: "hbo", logo: <SiHbo/>, color: "#000000"}

];


function today() {
    let today = new Date();

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear(); 

    
    return yyyy + "-" + mm + "-" + dd;
}


function getLogo(name) {
    let logo;

    preselects.forEach(function (item) {
        if (name === item.name)   
          logo = item.logo  
    })

    if (logo)
        return logo;
    
    return <SiGooglecalendar/>
}



export {Icon, preselects, today};