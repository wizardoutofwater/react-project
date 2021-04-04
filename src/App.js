import { Component } from "react";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmSpeed: 100,
      shutterSpeed: .004,
      aperture: 8,
      ev: 16,
      calcEv: 16,
    };
    console.log("running");
  }

  componentDidMount(){
    // save shot (or light/dark mode theme) in localStorage + retrieve prefs on load
    console.log('App component just mounted to DOM')
  }

  _handleUpdate = (e) => {
    console.log(e)
    let newValue = e.target.value
    console.log ('setting updated. value:' + newValue)
    this.setState({
      ...this.state,
      [e.target.id]: newValue
    })
    // this._calculateEv();
  }

  _handleClick = (e) => {
    e.preventDefault();
    console.log('Button Clicked');
    this._calculateEv();
  }
  // ---EV 100---  EV = log2((N^2)/ T)
  _calculateEv = () => {
    console.log('Calculate EV request')
    const { filmSpeed, shutterSpeed, aperture, ev, calcEv} = this.state
    console.log("fStop " + aperture);
    console.log("fStopSqaured " + (aperture ** 2));
    console.log("shutterSpeed " + shutterSpeed);
    // let newEv = Math.round(Math.log2((aperture ** 2)/shutterSpeed));
    let newEv = Math.round(Math.log2((100 * (aperture ** 2))/(filmSpeed * shutterSpeed)));
    console.log(newEv)
     
    this.setState({
      ...this.state,
      calcEv: newEv
    })
  }
  
  
  render() {
    const { filmSpeed, shutterSpeed, aperture, ev, calcEv} = this.state
    return (
      <div className="App">
      <div className = "hero is-fullheight ">
      <div>Calculated EV:{calcEv}  EV: {ev}   Aperture: f/{aperture}   Shutter: {shutterSpeed} sec   Film Speed: {filmSpeed}</div>
        <section className="section">
        
       
          <div className="container d-shadow is-fluid has-background-grey-lighter p-3">
            <div className="level rounded-sm">
              <div className="level-item has-text-centered ">
                <div>
                  <p className="heading">Exposure Value (EV) </p>
                  <div className="select">
                    <select value= {ev} onChange={event => this._handleUpdate(event)} id="ev">
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
                    <select value= {aperture} onChange={event => this._handleUpdate(event)} id="aperture">
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
                    <select value= {shutterSpeed} onChange={event => this._handleUpdate(event)} id="shutterSpeed">
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
                    <select value= {filmSpeed} onChange={event => this._handleUpdate(event)} id="filmSpeed">
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
    <button onClick={this._handleClick} type="submit" className="button is-primary">Choose</button>
  </div>
  </div>
            </div>
          </div>
       
        </section>
        <footer className="footer">
          <div className="content has-text-centered">
            <div>
            <small className="level-item">
                        Made with <span className="icon-text">
                            <span className="icon">
                              <i className="fas fa-coffee"></i>
                            </span>
                            <span>and Bulma.</span>
                          </span>  Designed by Mike McDonald.
                    </small>
            </div>
          </div>
        </footer>
      </div>
      </div>

    );
  }
}

export default App;
