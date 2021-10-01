import { setItemStorage, deleteItemStorage } from '../middlewares/localStorage';
import * as actions from '../actions';

const initialState = {
	isLogged: false,
	userName: '',
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actions.USER_LOGIN:
			const { accessToken, ...user } = payload;
			setItemStorage('accessToken', accessToken);
			setItemStorage('USER', user);
			return { ...state, userName: user.userName, isLogged: true };
		case actions.USER_LOGOUT:
			deleteItemStorage('accessToken', 'USER');
			return { ...state, ...payload, isLogged: false };
		case actions.USER_CURRENT:
			setItemStorage('USER', payload);
			return { ...state, userName: payload.userName, isLogged: true };
		case actions.USER_REGISTER:
			return { ...state, ...payload };
		default:
			return state;
	}
};

export default userReducer;
