import React, { useState } from 'react';
import './index.scss';
import { setUserSession } from '../../Utils/Common';
import { NavLink, useHistory } from 'react-router-dom';

function Signin() {
	const history = useHistory();
	const [ signinState, setSigninState ] = useState({
		error: null,
		loading: false,
		email: "",
		password: ""
	});

	const handleChange = (e) => {
		setSigninState({ ...signinState, [e.target.name]: e.target.value });
	}

	const handleLogin = (e) => {
		setSigninState({ ...signinState, error: null, loading: true });
		fetch('http://localhost:3001/api/signin',
			{ 	method: 'POST',
			  	headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json'
		  		},
		 	 	body: JSON.stringify({
				    email: signinState.email,
				    password: signinState.password
		  		}) 
		  })
		.then(response => {
			setSigninState({ ...signinState, loading: false });
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
			setSigninState({ ...signinState, error: error.errors, loading: false });
			if(error.status)
				console.log("error status: ", error.status);
			if(error.errors)
				error.errors.forEach(element => console.log(element));
			//if(error.response.status === 401) this.setState({ error: error.response.data.message });
			//else this.setState({error: 'Something went wrong. Please try again later.'});
		});
	}

	return (
		<div className="signin-container">
			<img src={require('../../media/work/specialty/specialty_01.jpg')} />
				<div className="signin-box">
					<div className="signin-box-content">
						<h1>Log in</h1><br />
						<div>
							<div className="input-text">Email</div>
							<input className="input-bubble" type="text" name='email' onChange={handleChange}/>
						</div>
						<div style={{ marginTop: 10}}>
							<div className="input-text">Password</div>
							<input className="input-bubble" type="password" name='password' onChange={handleChange} />
						</div><br />
						<small style={{ color: 'red' }}>{signinState.error}</small><br />
						<input className="login-button" type="button" onClick={handleLogin} value="Login"/><br />
						<br />Don't have account?
						<div><NavLink exact to='/signup'>Create Account</NavLink></div>
					</div>
				</div>
			</div>
	);
}

export default Signin;