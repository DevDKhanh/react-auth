import React from 'react';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

export const Logged = ({ children, pathname }) => {
	const { isLogged } = useSelector(state => state.userReducer);
	return (
		<React.Fragment>
			{isLogged ? <Redirect to={{ pathname: pathname }} /> : children}
		</React.Fragment>
	);
};

export const NotLogged = ({ children, pathname }) => {
	const { isLogged } = useSelector(state => state.userReducer);
	return (
		<React.Fragment>
			{!isLogged ? <Redirect to={{ pathname: pathname }} /> : children}
		</React.Fragment>
	);
};
