import { Component } from "react";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Selector from "./components/Selector";
import Hero from "./components/Hero";
import Settings from "./components/Settings";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmSpeed: 100,
      shutterSpeed: 0.004,
      aperture: 8,
      selectedEv: 16,
      calculatedEv: 16,
    };
    console.log("running");
  }

  componentDidMount() {
    // save shot (or light/dark mode theme) in localStorage + retrieve prefs on load
    console.log("App component just mounted to DOM");
  }

  _handleUpdate = (field, val) => {
    console.log("setting updated. value:" + val);
    this.setState({
      ...this.state, // do i need this spread?
      [field]: val,
    });
  };

  _handleClick = (event) => {
    event.preventDefault();
    console.log("Button Clicked");
    this.calculateEv();
  };

  // ---EV 100---  EV = log2((N^2)/ T)
  calculateEv = () => {
    console.log("Calculate EV request");
    const {
      filmSpeed,
      shutterSpeed,
      aperture,
      selectedEv,
      calculatedEv,
    } = this.state;
    console.log("fStop " + aperture);
    console.log("fStopSqaured " + aperture ** 2);
    console.log("shutterSpeed " + shutterSpeed);

    let newEv = Math.round(
      Math.log2((100 * aperture ** 2) / (filmSpeed * shutterSpeed))
    );
    console.log(newEv);

    this.setState({
      ...this.state,
      calculatedEv: newEv,
    });
  };

  render() {
    const {
      filmSpeed,
      shutterSpeed,
      aperture,
      selectedEv,
      calculatedEv,
    } = this.state;
    return (
      <div className="App">
        <Stats stats={this.state} />
        <Hero selectedEv={selectedEv} calculatedEv={calculatedEv} />
        <Settings
          stats={this.state}
          handleClick={(event) => this._handleClick(event)}
          handleUpdate={(field, val) => this._handleUpdate(field, val)}
        />
        {/* <Selector
          stats={this.state}
          handleClick={() => this._handleClick()}
          handleUpdate={() => this._handleUpdate()}
        /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
