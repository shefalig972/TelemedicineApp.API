import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false
        }
    }

    // Login operation
    handelSubmit = (e) => {
        e.preventDefault();

        this.setState({ loggedIn: true })
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/Dashboard/Dashboard" />
        }

        return (
            <form className="not-found" onSubmit={this.handelSubmit}>
              <div classNameName="loginForm">
                <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                    <div className="card card0 border-0">
                        <div className="row d-flex">
                            <div className="col-lg-6">
                                <div className="card1 pb-5">
                                    <div className="row logo"><b>ADMIN LOGIN</b></div>
                                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" className="image"></img> </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card2 card border-0 px-4 py-5">
                                    <div className="row px-3"> <label className="mb-1">
                                        <h6 className="mb-0 text-sm">Email Address</h6>
                                    </label> <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address"></input> </div>
                                    <div className="row px-3"> <label className="mb-1">
                                        <h6 className="mb-0 text-sm">Password</h6>
                                    </label> <input type="password" name="password" placeholder="Enter password"></input> </div>
                                    <div className="row px-3 mb-4">
                                        <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input"></input> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                                    </div>
                                    <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center">Login</button> </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue py-1">
                            <div className="row px-3">
                                <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021 <a href="https://www.talentelgia.com/" target="_blank">Talentelgia Technologies</a></small>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </form>
        )
    }
}
