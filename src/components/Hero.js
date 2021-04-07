import React from "react";
import "../App.css";

const Hero = (props) => (
   <div className="hero is-medium has-text-centered">
       <div className="columns">
           <div className="column">
               <h1>Selected EV:</h1>
               <br></br>
               <h2>{props.selectedEv}</h2>
           </div>
           <div className="column">
           <h1>Calculated EV:</h1>
               <br></br>
               <h2>{props.calculatedEv}</h2>
           </div>
       </div>
   </div>
)
 


export default Hero;