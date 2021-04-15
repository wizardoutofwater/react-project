import React from "react";
import "../App.css";

const Instructions = (props) => (
  <section className="section ">
    <div className="container ">
      <div className="columns is-vcentered">
        <div className="column">
          <div className="box bg-mintCream d-shadow ">
            <div className="content">
              <h2 className="title">Less Guesses, More Keepers.</h2>
              <p>
                 Select the lighting conditions and your camera's exposure settings below and let evCALC do the math!</p>

                
                 <p>No more missing a moment due to a poorly exposed frame. That expensive bracketing technique? (300% more expensive per photo!) Gone.
                Never again depend on that fifty year old meter built into your rangefinder. </p>
                <p> evCALC is here to help you make sure more of your shots turn out just the way you intended. 
              </p>
             
            </div>
          </div>
        </div>
        <div className="column">
          <figure className="image is-256x256">
            <img src="./camera-roll.svg" alt=" a roll of film" />
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default Instructions;
