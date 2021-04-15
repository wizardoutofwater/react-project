import React from 'react'

function Under ({text}) {
    return (
        <div>
           <div className="block">
      <p>Your shot is <strong>underexposed</strong>.  </p>
         <p> Try decreasing your shutter speed (longer exposure time)</p>
         <p>or opening your aperture (lower f-stop #)</p> 
      </div>
    
        </div>
    )
}

export default Under 
