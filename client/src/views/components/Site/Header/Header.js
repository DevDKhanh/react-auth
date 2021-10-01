import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logged from '../../Utils/Logged';

export default function Header() {
	const dispatch = useDispatch();
	return (
		<header>
			<div className="header wide">
				<div className="header-logo">
					<NavLink exact to="/">
						DevDKhanh
					</NavLink>
				</div>
				<div className="header-menu">
					<ul className="menu">
						<li className="menu-item">
							<NavLink to="/products" className="menu-link" exact>
								Products
							</NavLink>
						</li>
						<Logged>
							<li className="menu-item">
								<NavLink
									to="/dashboard"
									exact
									className="menu-link"
								>
									Dashboard
								</NavLink>
							</li>
						</Logged>
					</ul>
				</div>
				<div className="header-auth">
					<Logged>
						<button
							className="btn btn--primary"
							onClick={() => dispatch({ type: 'user/logout' })}
						>
							Đăng xuất
						</button>
						<React.Fragment>
							<NavLink to="/login" className="btn btn--pink">
								Login
							</NavLink>
							<NavLink
								to="/register"
								className="btn btn--secondary"
							>
								Register
							</NavLink>
						</React.Fragment>
					</Logged>
				</div>
			</div>
		</header>
	);
}
