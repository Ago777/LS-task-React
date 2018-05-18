import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import { FormTop } from './formTopComponent';

export class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "",
            region: "",

            fields: {
                firstname: "",
                lastname: "",
                addres: "",

            },
            errors: {
                firstname: "",
                lastname: "",
                addres: "",
                country: ""
            }
        }

    }
    // npm module for select country and region
    selectCountry(val) {
        this.setState({ country: val });
    };

    selectRegion(val) {
        this.setState({ region: val });
    };

    // call parent for changing step if validation true
    // and give appcomponnet parametr this.state 
    //parent appcomp save all steps states and finalcomponent can use it
    next = (e) => {
        e.preventDefault();
        if (this.handleValidate()) this.props.nextStep(this.state);
    };

    // change states of inputs
    handleChange = (field, e) => {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    };

    // check form validation if all ok return true else show errors
    handleValidate = () => {

        let isFormValid = true;
        let fields = this.state.fields;
        let errors = {};

        if (!fields["firstname"] || !fields["firstname"].match(/^[A-Z]{1}[a-z]+$/)) {
            isFormValid = false;
            errors["firstname"] = "Incorrect firstname";
        };

        if (!fields["lastname"] || !fields["lastname"].match(/^[A-Z]{1}[a-z]+$/)) {
            isFormValid = false;
            errors["lastname"] = "Incorrect lastname";
        };

        if (!this.state.country || !this.state.region) {
            isFormValid = false;
            errors["country"] = "please select country and region";
        };

        if (!fields["addres"]) {
            isFormValid = false;
            errors["addres"] = "please enter your addres";
        };

        this.setState({ errors });
        return isFormValid;

    };

    render() {

        return (
            <form>
                <FormTop step={this.props.step} />
                <div>
                    <div className="formbottom">
                        <div className="group">
                            <label>First Name *</label>
                            <span>{this.state.errors["firstname"]}</span>
                            <input type="text" placeholder="Your Name..."
                                value={this.state.fields["firstname"]}
                                onChange={this.handleChange.bind(this, "firstname")} />
                        </div>
                        <div className="group">
                            <label>Last Name *</label>
                            <span>{this.state.errors["lastname"]}</span>
                            <input type="text" placeholder="Your last name..."
                                value={this.state.fields["lastname"]}
                                onChange={this.handleChange.bind(this, "lastname")} />
                        </div>
                        <div className="group">
                            <fieldset>
                                <span>{this.state.errors["country"]}</span>
                                <legend className="resptxt">Select your country and region *</legend>
                                <CountryDropdown //npm module
                                    value={this.state.country}
                                    onChange={(val) => this.selectCountry(val)} />
                                <RegionDropdown //npm module
                                    country={this.state.country}
                                    value={this.state.region}
                                    onChange={(val) => this.selectRegion(val)} />
                            </fieldset>
                        </div>
                        <div className="group">
                            <label>Main Addrees *</label>
                            <span>{this.state.errors["addres"]}</span>
                            <input type="text" placeholder="your main addres"
                                value={this.state.fields["addres"]}
                                onChange={this.handleChange.bind(this, "addres")} />
                        </div>
                        <div className="group">
                            <label>Second Addrees</label>
                            <input type="text" placeholder="second addres" />
                        </div>
                        <div className="group">
                            <label>Legal *</label>
                            <select>
                                <option>Individual</option>
                                <option>Company</option>
                            </select>
                        </div>
                        <button className="btn" onClick={this.next}>Next</button>
                    </div>
                </div>
            </form>
        )
    }

}