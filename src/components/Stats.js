import React from "react";
import "../App.css";

const Stats = (props) => (
    <div>Calculated EV:{props.stats.calculatedEv}  EV: {props.stats.selectedEv}   Aperture: f/{props.stats.aperture}   Shutter: {props.stats.shutterSpeed} sec   Film Speed: {props.stats.filmSpeed}</div>

)

export default Stats