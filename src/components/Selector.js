import React from "react";
import "../App.css";

const Selector = (props) => {
    console.log (props);
    const { filmSpeed, shutterSpeed, aperture, selectedEv, calculatedEv } = props.stats
    console.log(selectedEv);
    return(
    <div className = "hero is-large ">
        <section className="section">     
          <div className="container d-shadow is-fluid has-background-grey-lighter p-3">
            <div className="level rounded-sm">
              <div className="level-item has-text-centered ">
                <div>
                  <p className="heading">Exposure Value (EV) </p>
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
              <div className="level-item has-text-centered">
                <div>
                <p className="heading">Aperture (f-stop)</p>
                  <div className="select">
                    <select value= {aperture} onChange={event =>props.handleUpdate('aperture', event.target.value)} id="aperture">
                      <option value="8">f/8</option>
                      <option value="11">f/11</option>
                      <option value="16">f/16</option>
                      <option value="22">f/22</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                <p className="heading">Shutter Speed </p>
                  <div className="select">
                    <select value= {shutterSpeed} onChange={event =>props.handleUpdate('shutterSpeed', event.target.value)} id="shutterSpeed">
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
              <div className="level-item has-text-centered">
                <div>
                <p className="heading">Film Speed (ISO) </p>
                  <div className="select">
                    <select value= {filmSpeed} onChange={event =>props.handleUpdate('filmSpeed', event.target.value)} id="filmSpeed">
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
              <div className="level-item has-text-centered">
              <div className="control">
    <button onClick={props.handleClick} type="submit" className="button is-primary">Choose</button>
  </div>
  </div>
            </div>
          </div>
       
        </section>
       
      </div>
    )
}

export default Selector;