import React, { useState, useEffect } from 'react';
import './index.scss';
import { getUser, removeUserSession } from '../../Utils/Common';
import { useHistory } from 'react-router-dom';

function Dashboard() {
	const history = useHistory();
	const [ dashboardState, setDashboardState ] = useState({
		user: ""
	})

	useEffect(() => {
		const user = getUser();
		setDashboardState({ user: user });
	}, [])

	const handleLogout = () => {
		removeUserSession();
		history.push('/signin');
	}

	return(
		<div>
			Welcome {dashboardState.user}<br /><br />
			<input type="button" onClick={handleLogout} value="Logout"/>
		</div>
	);
}

export default Dashboard;