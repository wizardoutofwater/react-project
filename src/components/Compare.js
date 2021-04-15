import React from "react";
import Results from "./result/Results";
import "../App.css";

const Compare = ({ selectedEv, calculatedEv }) => {
  return (
    <section className="section has-text-centered">
      <div className="box d-shadow">
        <div className="columns is-vcentered">
          <div className="column is-one-third">
            <div className="block has-text-right-desktop">
              <h1 className="title">Step Three:</h1>
              <h2 className="subtitle  is-4">Review the results!</h2>
              <h2 className="subtitle has-text-weight-light	">Adjust your settings until you get the perfect shot</h2>
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
