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
                Not tricks, Michael, illusions. No, I did not kill Kitty.
                However, I am going to oblige and answer the nice officer's
                questions because I am an honest man with no secrets to hide.
                Say goodbye to these, because it's the last time!
              </p>
              <ol>
                <li>But existing is basically all I do!</li>
                <li>Oh God, what have I done?</li>
                <li>
                  Please, Don-Bot… look into your hard drive, and open your
                  mercy file!
                </li>
              </ol>
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
