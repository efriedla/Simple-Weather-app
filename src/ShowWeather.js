import React from 'react';
import './ShowWeather.css';


const ShowWeather = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]; 
    return(
        <div className={`show-weather ${season}`}>
            <i className={`${iconName} icon icon-left massive`}></i>
            <p>{text}</p>
            <i className={`${iconName} icon icon-right massive`}></i>
        </div>
    )
};

const seasonConfig = {
    summer: {
        text: "summer time",
        iconName: "sun" 
    },
    winter: {
        text: "winter time",
        iconName: "snowflake" 
    }
};
const getSeason = (lat, month) => {
        if(month > 2 && month < 9){
           return lat > 0 ? 'summer' : 'winter';
        }else {
            return lat > 0 ? 'winter' : 'summer';
        }
}


export default ShowWeather