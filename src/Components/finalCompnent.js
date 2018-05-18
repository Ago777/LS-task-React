import React, { Component } from 'react';

// this comp use prent state via props
export class FinalStep extends Component {
    render() {
        let step1 = this.props.step1;
        let step3 = this.props.step3;
        return (
            <form>
                <div className="finalresult">
                    <h1>Congratulations!!!</h1>
                    <h2>Registartion Succesfull <span>&#10004;</span></h2>
                    <div className="infofield">
                        <ul>
                            <h3>Generel information</h3>
                            <div className="generalinfo">
                                <p>Firstname</p>
                                <li>{step1.fields.firstname}</li>
                                <p>lastname</p>
                                <li>{step1.fields.lastname}</li>
                                <p>Addres</p>
                                <li>{step1.fields.addres}</li>
                                <p>Country</p>
                                <li>{step1.country}</li>
                                <p>Region</p>
                                <li>{step1.region}</li>
                            </div>
                            <h3>Credit card</h3>
                            <div className="generalinfo">
                                <p>card name</p>
                                <li>{step3.cardname}</li>
                                <p>card CVC</p>
                                <li>{step3.cardcvc}></li>
                                <p>card number</p>
                                <li>{`${step3.cn1}  xxxx  xxxx  xxxx `}</li>
                                <p>expiration date</p>
                                <li>{step3.date}</li>
                            </div>
                        </ul>
                    </div>
                </div>

            </form>
        )
    }
}