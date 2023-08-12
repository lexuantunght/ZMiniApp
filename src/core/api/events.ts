import { Fetch } from 'core/network';

export const createEvent = (params: any) => {
	return Fetch.post('/events/create', params);
};

export const getAllEvents = () => {
	return Fetch.get('/events');
};

export const getAllMessages = (eventId: number) => {
	return Fetch.get('/events/discuss?id=' + eventId);
};

export const sendMessage = (params: any) => {
	return Fetch.post('/events/discuss/send', params);
};
