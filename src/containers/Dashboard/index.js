import React from 'react';
import './index.scss';
import { getUser, removeUserSession } from '../../Utils/Common';

class Dashboard extends React.Component {
	constructor( props ) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
		this.state = { user: "" };
	}

	componentDidMount(){
		const user = getUser();
		this.setState({ user: getUser() });
	}

	handleLogout() {
		removeUserSession();
		this.props.history.push('/signin');
	}

	render() {
		return(
			<div>
				Welcome {this.state.user}<br /><br />
				<input type="button" onClick={this.handleLogout} value="Logout"/>
			</div>
		);
	}

}

export default Dashboard;