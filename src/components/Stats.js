import React from "react";
import "../App.css";

const Stats = ({ stats }) => (
  <div>
    Calculated EV:{stats.calculatedEv} EV: {stats.selectedEv}{" "}
    Aperture: f/{stats.aperture} Shutter: {stats.shutterSpeed} sec
    Film Speed: {stats.filmSpeed}
  </div>
);

export default Stats;
