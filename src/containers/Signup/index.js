import React, { useState, useEffect } from 'react';
import './index.scss';
import { setUserSession } from '../../Utils/Common';
import { NavLink, useHistory } from 'react-router-dom';

function Signup() {
	const history = useHistory();
	const [ signupState, setSignupState ] = useState({
		error: null,
		loading: false,
		name: "",
		email: "",
		password: "",
		passwordConfirmation: ""
	});

	const handleChange = (e) => {
		setSignupState({ ...signupState, [e.target.name]: e.target.value });
	}

	const handleLogin = (e) => {
		setSignupState({ ...signupState, error: null, loading: true });
		fetch('http://localhost:3001/api/signup',
			{ 	method: 'POST',
			  	headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json'
		  		},
		 	 	body: JSON.stringify({
		 	 		name: signupState.name,
				    email: signupState.email,
				    password: signupState.password,
				    password_confirmation: signupState.passwordConfirmation
		  		}) 
		  })
		.then(response => {
			setSignupState({ ...signupState, loading: false });
			console.log(response);
			return response.json();
		})
		.then(res => {
			console.log(res);
			if(res.success) {
				setUserSession(res.token, res.message.name);
				history.push('/dashboard');
			}else {
				throw res;
			}
		})
		.catch(error => {
			setSignupState({ ...signupState, error: error.errors, loading: false });
			if(error.status)
				console.log("error status: ", error.status);
			if(error.errors)
				error.errors.forEach(element => console.log(element));
			//if(error.response.status === 401) this.setState({ error: error.response.data.message });
			//else this.setState({error: 'Something went wrong. Please try again later.'});
		});
	}

	return (
		<div className="signup-container">
			<img src={require('../../media/work/specialty/specialty_01.jpg')} />
			<div className="signup-box">
				<div className="signup-box-content">
					<h1>Create Account</h1><br />
					<div>
						<div className="input-text">Username</div>
						<input className="input-bubble" type="text" name='name' onChange={handleChange}/>
					</div>
					<div style={{ marginTop: 10}}>
						<div className="input-text">Email</div>
						<input className="input-bubble" type="text" name='email' onChange={handleChange}/>
					</div>
					<div style={{ marginTop: 10}}>
						<div className="input-text">Password</div>
						<input className="input-bubble" type="password" name='password' onChange={handleChange} />
					</div>
					<div style={{ marginTop: 10}}>
						<div className="input-text">Password Confirmation</div>
						<input className="input-bubble" type="password" name='passwordConfirmation' onChange={handleChange} />
					</div><br />
					<small style={{ color: 'red' }}>{signupState.error}</small><br />
					<input className="login-button" type="button" onClick={handleLogin} value="Signup"/><br />
					<br />Have an account?
					<div><NavLink exact to='/signin'>Sign In</NavLink></div>
				</div>
			</div>
		</div>
	);

}

export default Signup;