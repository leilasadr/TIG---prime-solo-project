import React from "react";
import hierarchy from './hierarchy.jpg';
import { useSelector } from "react-redux";

function FeedbackPage(){
    // console.log(hierarchy);
    return (
      <div className="container">
        <p>Placeholder: Do you notice any sensations that are the loudest right away? </p>
        <p>Where do you feel green in your body?</p>
        <p>Where do you feel yellow in your body?</p>
        <p> Where do you feel red in your body?</p>

        <img src={hierarchy} alt="PVT hierarchy" height={500} width={100} />
       
      </div>
    )
};

export default FeedbackPage;