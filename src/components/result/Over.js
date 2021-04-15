import React from "react";

function Over({ text }) {
  return (
    <div>
      <div className="block">
        <h2 className="subtitle">
          Your shot is <strong>overexposed</strong>.{" "}
        </h2>
        <div className="has-text-weight-light">
        <p >Try increasing your shutter speed (shorter exposure time)</p>
           <p>or closing your aperture (higher f-stop #)</p>
      </div>
      </div>
    </div>
  );
}

export default Over;
