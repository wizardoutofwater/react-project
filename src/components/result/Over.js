import React from "react";

function Over({ text }) {
  return (
    <div>
      <div className="block">
        <p>
          Your shot is <strong>overexposed</strong>.{" "}
        </p>

        <p>
          {" "}
          Try increasing your shutter speed (shorter exposure time) or closing
          your aperture (higher f-stop #)
        </p>
      </div>
    </div>
  );
}

export default Over;
