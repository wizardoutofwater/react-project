import React from "react";
import "../App.css";

const Settings = (props) => {
    console.log (props);
    const { filmSpeed, shutterSpeed, aperture, selectedEv, calculatedEv } = props.stats
    console.log(selectedEv);
    return(
    <div className = "container is-large ">
        <section className="section is-large">     
          <div className="container d-shadow is-fluid has-background-grey-lighter p-3">
            <div className="columns is-vcentered">
              <div className="column has-text-centered ">
                <div>
                  <p className="heading is-size-6">Exposure Value (EV) </p>
                  <div class="select">
                    <select value= {selectedEv} onChange={(event) =>props.handleUpdate('selectedEv', event.target.value)} id="ev">
                      <option value="12">EV +12</option>
                      <option value="13">EV +13</option>
                      <option value="14">EV +14</option>
                      <option value="15">EV +15</option>
                      <option value="16">EV +16</option>
                    </select>
                  </div>
                  

                </div>
              </div>
              <div className="column is-justify-content-center has-text-centered">
                <div>
                <p className="heading is-size-6">Aperture (f-stop)</p>
                  <div className="select">
                    <select value= {aperture} onChange={(event) =>props.handleUpdate('aperture', event.target.value)} id="aperture">
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
                  <div className="select">
                    <select value= {shutterSpeed} onChange={(event) =>props.handleUpdate('shutterSpeed', event.target.value)} id="shutterSpeed">
                    <option value=".01"> 1/100 sec.</option>
                    <option value=".01"> 1/100 sec.</option>
                      <option value=".03334"> 1/30 sec. </option>
                      <option value=".01667"> 1/60 sec.</option>
                      <option value=".01"> 1/100 sec.</option>
                      <option value=".0125"> 1/125 sec.</option>
                      <option value=".004"> 1/250 sec.</option>
                      <option value=".002"> 1/500 sec.</option>
                      <option value=".001"> 1/1000 sec.</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="column has-text-centered">
                <div>
                <p className="heading is-size-6">Film Speed (ISO) </p>
                  <div className="select">
                    <select value= {filmSpeed} onChange={(event) =>props.handleUpdate('filmSpeed', event.target.value)} id="filmSpeed">
                      <option value="50">50 ISO</option>
                      <option value="100">100 ISO</option>
                      <option value="200">200 ISO</option>
                      <option value="400">400 ISO</option>
                      <option value="800">800 ISO</option>
                      <option value="1600">1600 ISO</option>
                      <option value="1600">3200 ISO</option>
                    </select>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
       <div className ="container mt-4">
       <div className="control">
    <button className="d-shadow" onClick={(event) => props.handleClick(event)} type="submit" className="button is-primary">Calculate</button>
  </div>
       </div>
        </section>
       
      </div>
    )
}

export default Settings;