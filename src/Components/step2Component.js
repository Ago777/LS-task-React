import React, { Component } from 'react';

import { FormTop } from './formTopComponent';

export class Step2 extends Component {

    // call parent nextstep() for changing step
    next = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    // call parent func for changeing step
    back = (e) => {
        e.preventDefault();
        this.props.previousStep()
    };

    render() {
        return (
            <form>
                <FormTop step={this.props.step} />
                <div className="formbottom">
                    <fieldset className="step2">
                        <legend><h3>Chosse Package</h3></legend>
                        <div>
                            <input type="radio" name="package" defaultChecked />STANDART<br />
                            <input type="radio" name="package" />PREMIUM
                       </div>
                    </fieldset>
                    <button className="btn" onClick={this.next}>Next</button>
                    <button className="btn" onClick={this.back}>Back</button>
                </div>
            </form>
        )
    }
}