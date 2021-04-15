import React from "react";
import { levels } from "../constants/evScale";

const Conditions = ({ selectedEv, handleUpdate }) => {
  let ev = { selectedEv }["selectedEv"];
  let evString = ev.toString();
  let selectedCondition = levels[evString];
  console.log(selectedCondition);
  // console.log(ev)
  // console.log(typeof ev)
  // console.log(evString)
  // console.log(typeof evString)
  // console.log( levels[evString])
  return (
    <>
    
      <section className="section">
        <div className="box p-3">
          <div className="columns is-centered is-vcentered">
            <div className="column has-text-left-desktop">
              <h1 className="title">Step One:</h1>
              <h2 className="subtitle mb-4 is-4">Select your conditions </h2>
              {/* <button onClick={this.handleClick} className="button is-small is-info">Click Here for more EV Scale info</button> */}
              <div className="select is-large">
                <select
                  value={selectedEv}
                  onChange={(event) =>
                    handleUpdate("selectedEv", event.target.value)
                  }
                  id="selectedEv"
                >
                  {/* <option selected disabled>Choose a Breed...</option>
            {levels.map((breed, index) =>
              <option key={index} value={breed}>{breed}</option>
            )} */}
                  <option value="-6">EV -6</option>
                  <option value="-5">EV -5</option>
                  <option value="-4">EV -4</option>
                  <option value="-3">EV -3</option>
                  <option value="-2">EV -2</option>
                  <option value="-1">EV -1</option>
                  <option value="0">EV 0</option>
                  <option value="1">EV +1</option>
                  <option value="2">EV +2</option>
                  <option value="3">EV +3</option>
                  <option value="4">EV +4</option>
                  <option value="5">EV +5</option>
                  <option value="6">EV +6</option>
                  <option value="7">EV +7</option>
                  <option value="8">EV +8</option>
                  <option value="9">EV +9</option>
                  <option value="10">EV +10</option>
                  <option value="11">EV +11</option>
                  <option value="12">EV +12</option>
                  <option value="13">EV +13</option>
                  <option value="14">EV +14</option>
                  <option value="15">EV +15</option>
                  <option value="16">EV +16</option>
                </select>
              </div>
            </div>
            <div className="column is-flex is-justify-content-center ">
              <figure className="image is-128x128">
                <img
                  src={`./scene-icons/${evString}.svg`}
                  alt="icon of selected shooting conditions"
                />
              </figure>
            </div>
            <div className="column has-text-center">
              <h2 className="subtitle has-text-weight-light">{`${selectedCondition}`}</h2>
            </div>
          </div>
        </div>
      </section>
      {/* <div className={`modal ${active}`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button
                onClick={this.handleClick}
                className="delete"
                aria-label="close"
              />
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g Alex Smith"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" />I agree to get you the gift you
                    pest...
                  </label>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">Save changes</button>
              <button onClick={this.handleClick} className="button">
                Cancel
              </button>
            </footer>
          </div>
        </div>

        <button onClick={this.handleClick} className="button is-small is-info">
          Show Modal
        </button> */}
    </>
  );
};

export default Conditions;
