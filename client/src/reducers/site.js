import * as actions from '../actions';

const initialState = {
	isLoading: false,
};

const siteReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actions.SITE_UNLOCK_LOAD:
			return { ...state, isLoading: true };
		default:
			return state;
	}
};

export default siteReducer;
