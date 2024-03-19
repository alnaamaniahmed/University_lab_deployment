import React from "react";
import landmarks from "../landmarks";
import Card from "./Card";


function App(){
    const title = "Famous Landmarks";
    return (
        <div>
            <h1>
                {title}
            </h1>
            <Card name={landmarks[0].landmark} image={landmarks[0].imgURL} location = {landmarks[0].location} />
            <Card name={landmarks[1].landmark} image={landmarks[1].imgURL} location = {landmarks[1].location}/>
            <Card name={landmarks[2].landmark} image={landmarks[2].imgURL} location = {landmarks[2].location}/>
        </div>
    );
}

export default App;