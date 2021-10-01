import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Logged, NotLogged } from './redirect';

import Home from '../views/pages/Home/Home';
import Login from '../views/pages/Login/Login';
import Register from '../views/pages/Register/Register';
import Products from '../views/pages/Product/Products';
import Dashboard from '../views/pages/Dashboard/Dashboard';

const Routers = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact>
				<Logged pathname="/">
					<Login />
				</Logged>
			</Route>
			<Route path="/register" exact component={Register} />
			<Route path="/products" exact component={Products} />
			<Route path="/dashboard" exact>
				<NotLogged pathname="/login">
					<Dashboard />
				</NotLogged>
			</Route>
		</Switch>
	);
};

export default Routers;
