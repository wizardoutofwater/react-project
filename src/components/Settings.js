import React from "react";
import "../App.css";

const Settings = (props) => {
  // console.log (props);    *** SHOULD I USE useState here?
  const {
    filmSpeed,
    shutterSpeed,
    aperture,
    selectedEv,
    calculatedEv,
  } = props.stats;
  // console.log(selectedEv);
  return (
    <section className="section  rounded-bg">
      <div className="box bg-mintCream d-shadow   p-3">

      <div className="block has-text-center-desktop">
        <h1 className="title">Step Two:</h1>
        <h2 className="subtitle  is-4">Enter your settings and hit 'Calculate' </h2>
       </div>
        {/* <h2  className="subtitle has-text-weight-light">Click the 'Save' button to add the settings to your roll!</h2> */}
        <div className="columns ">
          <div className="column has-text-centered">
            <div>
              <p className="heading is-size-6">Aperture (f-stop)</p>
              <div className="select is-large">
                <select
                  value={aperture}
                  onChange={(event) =>
                    props.handleUpdate("aperture", event.target.value)
                  }
                  id="aperture"
                >
                <option value="1">f/1.0</option>
                <option value="1.4">f/1.4</option>
                <option value="1.8">f/1.8</option>
                <option value="2.0">f/2.0</option>
                <option value="2.8">f/2.8</option>
                <option value="3.5">f/3.5</option>
                <option value="4">f/4.0</option>
                <option value="5.6">f/5.6</option>
                  <option value="8">f/8</option>
                  <option value="11">f/11</option>
                  <option value="16">f/16</option>
                  <option value="22">f/22</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column has-text-centered">
            <div>
              <p className="heading is-size-6">Shutter Speed </p>
              <div className="select is-large">
                <select
                  value={shutterSpeed}
                  onChange={(event) =>
                    props.handleUpdate("shutterSpeed", event.target.value)
                  }
                  id="shutterSpeed"
                >
               
                <option value="30"> 30 sec.</option>
                <option value="15"> 15 sec.</option>
                <option value="8"> 8 sec.</option>
                <option value="4"> 4 sec.</option>
                <option value="2"> 2 sec.</option>
                <option value="1"> 1 sec.</option>
                <option value=".5"> 1/2 sec.</option>
                <option value=".25"> 1/4 sec.</option>
                  <option value=".0125"> 1/8 sec.</option>
                  <option value=".06667"> 1/15 sec.</option>
                  <option value=".03334"> 1/30 sec. </option>
                  <option value=".01667"> 1/60 sec.</option>
                  <option value=".01"> 1/100 sec.</option>
                  <option value=".0125"> 1/125 sec.</option>
                  <option value=".004"> 1/250 sec.</option>
                  <option value=".002"> 1/500 sec.</option>
                  <option value=".001"> 1/1000 sec.</option>
                  <option value=".005"> 1/2000 sec.</option>
                </select>
              </div>
            </div>
          </div>
          <div className="column has-text-centered">
            <div>
              <p className="heading is-size-6">Film Speed (ISO) </p>
              <div className="select is-large">
                <select
                  value={filmSpeed}
                  onChange={(event) =>
                    props.handleUpdate("filmSpeed", event.target.value)
                  }
                  id="filmSpeed"
                >
                  <option value="50">50 ISO</option>
                  <option value="100">100 ISO</option>
                  <option value="200">200 ISO</option>
                  <option value="400">400 ISO</option>
                  <option value="800">800 ISO</option>
                  <option value="1600">1600 ISO</option>
                  <option value="3200">3200 ISO</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="control">
          <button
            className="button is-rounded is-large d-shadow"
            onClick={(event) => props.handleClick(event)}
            type="submit"
          >
            Calculate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
