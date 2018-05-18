import React, { Component } from 'react';

import { FormTop } from './formTopComponent';

export class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                cardname: "",
                cardcvc: "",
                date: "",
                cn1: "",
                cn2: "",
                cn3: "",
                cn4: ""
            },
            errors: {
                cardname: "",
                cardcvc: "",
                date: "",
                cn: "",

            }
        }
    };


    // call parent func) for changing step
    back = (e) => {
        e.preventDefault();
        this.props.previousStep();
    };

    // call parent for changing step if validation true
    // and give appcomponnet parametr this.state 
    //parent appcomp save all steps states and finalcomponent can use it
    next = (e) => {
        e.preventDefault();
        if (this.handleValidating()) this.props.nextStep(this.state.fields);
    };

    // change states of inputs
    handleChange = (field, e) => {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields })

    };

    // check form validation if all ok return true else show errors
    handleValidating = () => {
        let isFormValid = true;
        let fields = this.state.fields;
        let errors = {};

        for (let i = 1; i <= 4; i++) {
            if (!fields[`cn${i}`] || !fields[`cn${i}`].match(/\d{4}/)) {
                isFormValid = false;
                errors["cn"] = "incorrect numbers";
            }
        };

        if (!fields["cardname"] || !fields["cardname"].match(/[A-Z]+$/)) {
            isFormValid = false;
            errors["cardname"] = "inccorect cardname";
        };

        if (!fields["cardcvc"] || !fields["cardcvc"].match(/\d{3}/)) {
            isFormValid = false;
            errors["cardcvc"] = "incorrect CVC"
        };

        if (!fields["date"]) {
            isFormValid = false;
            errors["date"] = "please choose date"
        };

        this.setState({ errors });
        return isFormValid;

    };


    render() {
        return (
            <form>
                <FormTop step={this.props.step} />
                <div className="formbottom">

                    <div className="cardnumber">
                        <label>Credit Card number *</label><span>{this.state.errors["cn"]}</span><br />
                        <input type="text" maxLength="4" placeholder="xxxx"
                            value={this.state.fields["cn1"]}
                            onChange={this.handleChange.bind(this, "cn1")} />
                        <input type="text" maxLength="4" placeholder="xxxx"
                            value={this.state.fields["cn2"]}
                            onChange={this.handleChange.bind(this, "cn2")} />
                        <input type="text" maxLength="4" placeholder="xxxx"
                            value={this.state.fields["cn3"]}
                            onChange={this.handleChange.bind(this, "cn3")} />
                        <input type="text" maxLength="4" placeholder="xxxx"
                            value={this.state.fields["cn4"]}
                            onChange={this.handleChange.bind(this, "cn4")} />
                    </div>
                    <div>
                        <label>Credit Card name *</label>
                        <span>{this.state.errors["cardname"]}</span>
                        <input type="text" placeholder="your name in card"
                            value={this.state.fields["cardname"]}
                            onChange={this.handleChange.bind(this, "cardname")} />
                    </div>
                    <div className="cardinfo">
                        <div className="left">
                            <label>Credit Card CVC *</label>
                            <span>{this.state.errors["cardcvc"]}</span>
                            <input type="text" placeholder="your card cvc" maxLength="3"
                                value={this.state.fields["cardcvc"]}
                                onChange={this.handleChange.bind(this, "cardcvc")} />
                        </div>
                        <div className="right">
                            <label>Expiration date *</label>
                            <span>{this.state.errors["date"]}</span>
                            <input type="month" value={this.state.fields["date"]}
                                onChange={this.handleChange.bind(this, "date")} />
                        </div>
                    </div>
                    <button className="btn" onClick={this.next}>Submit</button>
                    <button className="btn" onClick={this.back}>Back</button>
                </div>
            </form>
        )
    }
}