import React, { Component } from 'react';

import './App.css';
import { Step1 } from './Components/step1Component';
import { Step2 } from "./Components/step2Component";
import { Step3 } from "./Components/step3Component";
import { FinalStep } from './Components/finalCompnent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      step1data: {},
      step3data: {},
    }
  };

  nextStep = (data) => {
    switch (this.state.step) {
      case 1: this.setState({ step1data: data, step: this.state.step + 1 }); break;
      case 2: this.setState({ step: this.state.step + 1 }); break;
      case 3: this.setState({ step3data: data, step: this.state.step + 1 }); break
    }
  };

  previousStep = () => {
    this.setState({
      step: this.state.step - 1
    })
  };

  render() {
    switch (this.state.step) {
      case 1: return <Step1 nextStep={this.nextStep} previousStep={this.previousStep} step={this.state.step} />;
      case 2: return <Step2 nextStep={this.nextStep} previousStep={this.previousStep} step={this.state.step} />;
      case 3: return <Step3 nextStep={this.nextStep} previousStep={this.previousStep} step={this.state.step} />;
      case 4: return <FinalStep step1={this.state.step1data} step3={this.state.step3data} />
    }
  };
}


export default App;
