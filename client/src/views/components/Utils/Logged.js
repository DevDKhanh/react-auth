import React from 'react';
import { useSelector } from 'react-redux';

function Logged({ children }) {
	const { isLogged } = useSelector(state => state.userReducer);
	return (
		<React.Fragment>
			{children.length > 1 ? (
				<React.Fragment>
					{isLogged ? children[0] : children[1]}
				</React.Fragment>
			) : (
				<React.Fragment>{isLogged && children}</React.Fragment>
			)}
		</React.Fragment>
	);
}

export default Logged;
