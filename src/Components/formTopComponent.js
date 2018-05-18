import React, { Component } from "react";

// this component is always be in top stepcomponnets and receiv props from it 
export class FormTop extends Component {
    render() {
        return (
            <div className="formtop">
                <div className="left">
                    <h2>Step {this.props.step}/3</h2>
                    <p>* required fields</p>
                </div>
                <div className="right">
                    <i className="fa fa-user"></i>
                </div>
            </div>
        )
    }
}