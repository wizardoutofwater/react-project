import React from 'react'

const Conditions = ({selectedEv, handleUpdate}) => {
    return (
        <>
        <section className="section">
           
        <div className="box p-3">
        <h1 class="title">Step One:</h1>
<h2 class="subtitle">Select your conditions </h2>
              <div class="select is-large">
                  <select
                    value={selectedEv}
                    onChange={(event) =>
                      handleUpdate("selectedEv", event.target.value)
                    }
                    id="selectedEv"
                  >
                    <option value="12">EV +12</option>
                    <option value="13">EV +13</option>
                    <option value="14">EV +14</option>
                    <option value="15">EV +15</option>
                    <option value="16">EV +16</option>
                  </select>
                </div>
        </div>
      
        </section>
    </>
    )
}

export default Conditions
