import React, { useState, useEffect } from "react";
import Results from "./Results";
import "../App.css";

const Compare = ({ selectedEv, calculatedEv }) => {
  return (
    <section className="section has-text-centered">
      <div className="box d-shadow">
        <div className="columns">
          <div className="column is-one-third">
            <div className="block has-text-right-desktop">
              <h1 className="title">Step Three:</h1>
              <h2 className="subtitle  is-4">Review the results!</h2>
            </div>
          </div>
          <div className="column ">
            <Results selectedEv={selectedEv} calculatedEv={calculatedEv} />
          </div>

          {/* <div className="column">
               <h1 className="title">Selected EV:</h1>
               <br></br>
               <h2 className="subtitle">{selectedEv}</h2>
           </div>
           <div className="column">
           <h1 className="title">Calculated EV:</h1>
               <br></br>
               <h2 className="subtitle">{calculatedEv}</h2>
           </div> */}
        </div>
      </div>
    </section>
  );
};

export default Compare;
