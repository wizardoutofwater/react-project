import React from 'react'

function Under ({text}) {
    return (
        <div>
           <div className="block">
      <h2 className="subtitle">Your shot is <strong>underexposed</strong>.  </h2>
      <div className="has-text-weight-light">
         <p > Try decreasing your shutter speed (longer exposure time)</p>
         <p>or opening your aperture (lower f-stop #)</p>
         </div> 
      </div>
    
        </div>
    )
}

export default Under 
