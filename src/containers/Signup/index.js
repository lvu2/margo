import React, { useState } from 'react';
import './index.scss';
import { setUserSession } from '../../Utils/Common';
import { NavLink } from 'react-router-dom';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null,
					   loading: false,
					   name: "", email: "",
					   password: "",
					   passwordConfirmation: ""
					};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleNameChange(e) {
		this.setState({ name: e.target.value });
	}

	handleEmailChange(e) {
		this.setState({ email: e.target.value });
	}

	handlePasswordChange(e) {
		this.setState({ password: e.target.value });
	}

	handlePasswordConfirmationChange(e) {
		this.setState({ passwordConfirmation: e.target.value });
	}

	handleLogin(e) {
		this.setState({ error: null, loading: true });
		fetch('http://localhost:3001/api/signup',
				{ 	method: 'POST',
				  	headers: {
					    'Accept': 'application/json',
					    'Content-Type': 'application/json'
			  		},
			 	 	body: JSON.stringify({
			 	 		name: this.state.name,
					    email: this.state.email,
					    password: this.state.password,
					    password_confirmation: this.state.passwordConfirmation
			  		}) 
			  })
			.then(response => {
				this.setState({loading: false});
				console.log(response);
				return response.json();
			})
			.then(res => {
				console.log(res);
				if(res.success) {
					setUserSession(res.token, res.message.name);
					this.props.history.push('/dashboard');
				}else {
					throw res;
				}
			})
			.catch(error => {
				this.setState({loading: false});
				this.setState({ error: error.errors });
				if(error.status)
					console.log("error status: ", error.status);
				if(error.errors)
					error.errors.forEach(element => console.log(element));
				//if(error.response.status === 401) this.setState({ error: error.response.data.message });
				//else this.setState({error: 'Something went wrong. Please try again later.'});
			});
	}

	render() {
		return (
			<div className="signup-container">
			<img src={require('../../media/work/specialty/specialty_01.jpg')} />
				<div className="signup-box">
					<div className="signup-box-content">
						<h1>Create Account</h1><br />
						<div>
							<div className="input-text">Username</div>
							<input className="input-bubble" type="text" onChange={this.handleNameChange}/>
						</div>
						<div style={{ marginTop: 10}}>
							<div className="input-text">Email</div>
							<input className="input-bubble" type="text" onChange={this.handleEmailChange}/>
						</div>
						<div style={{ marginTop: 10}}>
							<div className="input-text">Password</div>
							<input className="input-bubble" type="password" onChange={this.handlePasswordChange} />
						</div>
						<div style={{ marginTop: 10}}>
							<div className="input-text">Password Confirmation</div>
							<input className="input-bubble" type="password" onChange={this.handlePasswordConfirmationChange} />
						</div><br />
						<small style={{ color: 'red' }}>{this.state.error}</small><br />
						<input className="login-button" type="button" onClick={this.handleLogin} value="Signup"/><br />
						<br />Have an account?
						<div><NavLink exact to='/signin'>Sign In</NavLink></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;