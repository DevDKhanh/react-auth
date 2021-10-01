import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions';

import { authAPI } from '../api/authAPI';

export default function CurrentUser({ children }) {
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.siteReducer);

	useEffect(() => {
		const unLock = () => {
			dispatch({ type: actions.SITE_UNLOCK_LOAD });
		};
		const setLogin = res => {
			dispatch({ type: actions.USER_CURRENT, payload: res.user });
		};
		authAPI
			.currentUser()
			.then(res => {
				if (res.user) {
					setLogin(res);
					unLock();
				} else {
					unLock();
				}
			})
			.catch(err => {
				unLock();
			});
	}, [dispatch]);

	return <React.Fragment>{isLoading && children}</React.Fragment>;
}
