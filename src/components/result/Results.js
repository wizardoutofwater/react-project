import React, { useState, useEffect } from "react";

import Over from "./Over";
import Under from "./Under";
import Success from "./Success";
const Results = ({ selectedEv, calculatedEv }) => {
  const [status, setStatus] = useState("initial");

  //   Effect - determines whether settings are over/under/evenly exposed and sets status
  useEffect(() => {
    if (!calculatedEv) {
      // need a guard to prevent initial render(effect run)
    } else if (selectedEv > calculatedEv) {
      setStatus("over");
    } else if (selectedEv < calculatedEv) {
      setStatus("under");
    } else {
      setStatus("success");
    }
    console.log(status);
  }, [selectedEv, calculatedEv, status]);

  return (
    <div>
      {(() => {
        switch (status) {
          case "over":
            return <Over text={status} />;
          case "under":
            return <Under text={status} />;
          case "success":
            return <Success text={status} />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default Results;

// 'enum method' from robinwieruch.de
// const STATUS_STATES = {
//     over: <Over />,
//     under: <Under />,
//     success: <Success />,
//   };

//   function Notification({ status }) {
//     return (
//       <div>
//         {STATUS_STATES[status]}
//       </div>
//     );
//   }
