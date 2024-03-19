import React from "react";
import Picture from "./Picture";
import Location from "./Location";


function Card(props){
    return(
        <div className="menu__container">
            <div className="body">
                <h4>{props.name}</h4>
                <Picture image={props.image}/>
            </div>
            <div className="bottom">
                <Location locationInfo={props.location}/>
            </div>
        </div>
    );


}
export default Card;