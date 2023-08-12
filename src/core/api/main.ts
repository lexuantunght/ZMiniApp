import { Fetch } from 'core/network';

export const pushNoti = (params) => {
	return Fetch.post('/push-noti', params);
};

export const setUser = (params) => {
	return Fetch.post('/user/signup', params);
};
