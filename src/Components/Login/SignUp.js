import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Password: '',
            ConfirmPassword: '',
            Email: '',
            Agreement: false,
            ActiveSubmit: false,
            Message: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    cofirmPassword = (event) => {
        if (event.target.value === this.state.Password) {
            this.setState({
                ActiveSubmit: false,
                ConfirmPassword: event.target.value,
                Message: ''
            })
        } else {

            this.setState({
                ActiveSubmit: true,
                Message: 'Password Not Match',
                ConfirmPassword: event.target.value
            })
        }
    }

    handleAgreement = () => {
        this.setState({
            Agreement: !this.state.Agreement
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
        if (this.state.Agreement) {
            let { Name, Password, Email } = this.state
            const userData = {
                Name: Name,
                Password: Password,
                Email: Email
            }

            try {
                const { signUpToApp } = this.props

                signUpToApp(userData)
                console.log(userData);

                this.setState({
                    Name: '',
                    Password: '',
                    ConfirmPassword: '',
                    Email: '',
                    LicenseAgreement: false,
                    ActiveSubmit: false,
                    Message: ""
                })

            } catch (error) {
                this.setState({
                    Message: error
                })
            }

        } else {
            alert('You Cant SignUp to this App without accept website rules. Please Check Agreement checkbox first')
        }





    }



    render() {
        return (
            <div >
                <h1>SignUp Component</h1>
                <hr />
                <form className="signupForm">
                    <input
                        type="text"
                        name="Name"
                        value={this.state.Name}
                        placeholder="Full Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        name="Email"
                        value={this.state.Email}
                        placeholder="Email Address"
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="Password"
                        value={this.state.Password}
                        placeholder="Password"
                        onChange={this.handleChange}
                    />

                    <input
                        type="password"
                        name="ConfirmPassword"
                        value={this.state.ConfirmPassword}
                        placeholder="ReEnter Password"
                        onChange={this.cofirmPassword}
                    />

                    <input
                        className="signUpCheckbox"
                        type="checkbox"
                        name="Agreement"
                        checked={this.state.Agreement}
                        onChange={this.handleAgreement}
                    /> I have read license agreement and accept it

                    <button
                        disabled={this.state.ActiveSubmit}
                        className="btn btn-success"
                        onClick={this.handleSubmit}>Sign Up</button>

                    <p style={{ color: "red" }}>{this.state.Message}</p>

                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpToApp: userData => dispatch(SignUp(userData))
})

export default withRouter(connect(null, mapDispatchToProps)(SignUp));