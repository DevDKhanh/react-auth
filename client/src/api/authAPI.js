import axiosClient from '.';

export const authAPI = {
	register: data => {
		const url = '/auth/register';
		return axiosClient.post(url, { ...data });
	},
	login: data => {
		const url = '/auth/login';
		return axiosClient.post(url, { ...data });
	},
	currentUser: () => {
		const url = '/auth/current-user';
		return axiosClient.get(url, {});
	},
};
