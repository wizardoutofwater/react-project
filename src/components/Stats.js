import React, {useState, useEffect} from "react";
import "../App.css";

const Stats = ({ stats }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
   if (stats.selectedEv > stats.calculatedEv) {
    setMessage('Your shot is OVERexposed.')
   } else if (stats.selectedEv < stats.calculatedEv){
    setMessage('Your Shot is UNDERexposed')
   } else {
     setMessage('Your Shot is Correctly Exposed')
   }
   console.log(message);
  }, [stats.selectedEv, stats.calculatedEv, message])
return (
  <div>
    Calculated EV:{stats.calculatedEv} EV: {stats.selectedEv}{" "}
    Aperture: f/{stats.aperture} Shutter: {stats.shutterSpeed} sec
    Film Speed: {stats.filmSpeed}
    :::{`${message}`}:::
  </div>
);
}

export default Stats;
