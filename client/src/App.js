import React from 'react';
import Routers from './routers';
import { BrowserRouter as Router } from 'react-router-dom';

import CurrentUser from './auth/CurrentUser';
import Header from './views/components/Site/Header/Header';
import './sass/app.scss';

export default function App() {
	return (
		<Router>
			<CurrentUser>
				<Header />
				<Routers />
			</CurrentUser>
		</Router>
	);
}
