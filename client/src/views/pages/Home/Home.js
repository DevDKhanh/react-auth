import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
	const { isLogged } = useSelector(state => state.userReducer);
	return (
		<div className="main-page">
			<h1>{isLogged ? 'Home' : 'Welcome'}</h1>
		</div>
	);
}
