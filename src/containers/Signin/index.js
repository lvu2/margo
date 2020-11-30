import React, { useState } from 'react';
import './index.scss';
import { setUserSession } from '../../Utils/Common';
import { NavLink } from 'react-router-dom';

class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null, loading: false, email: "", password: "" };
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleEmailChange(e) {
		this.setState({ email: e.target.value });
	}

	handlePasswordChange(e) {
		this.setState({ password: e.target.value });
	}

	handleLogin(e) {
		this.setState({ error: null, loading: true });
		fetch('http://localhost:3001/api/signin',
				{ 	method: 'POST',
				  	headers: {
					    'Accept': 'application/json',
					    'Content-Type': 'application/json'
			  		},
			 	 	body: JSON.stringify({
					    email: this.state.email,
					    password: this.state.password
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
			<div className="signin-container">
			<img src={require('../../media/work/specialty/specialty_01.jpg')} />
				<div className="signin-box">
					<div className="signin-box-content">
						<h1>Log in</h1><br />
						<div>
							<div className="input-text">Email</div>
							<input className="input-bubble" type="text" onChange={this.handleEmailChange}/>
						</div>
						<div style={{ marginTop: 10}}>
							<div className="input-text">Password</div>
							<input className="input-bubble" type="password" onChange={this.handlePasswordChange} />
						</div><br />
						<small style={{ color: 'red' }}>{this.state.error}</small><br />
						<input className="login-button" type="button" onClick={this.handleLogin} value="Login"/><br />
						<br />Don't have account?
						<div><NavLink exact to='/signup'>Create Account</NavLink></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Signin;