import React from "react";
import "../App.css";

const Compare = (props) => (
   <section className="section has-text-centered">
       <div className="container">
       <div className="columns">
           <div className="column">
               <h1 className="title">Selected EV:</h1>
               <br></br>
               <h2 className="subtitle">{props.selectedEv}</h2>
           </div>
           <div className="column">
           <h1 className="title">Calculated EV:</h1>
               <br></br>
               <h2 className="subtitle">{props.calculatedEv}</h2>
           </div>
       </div>
       </div>
   </section>
)
 


export default Compare;