import { EventsAPI } from 'core/api';

class EventsController {
	createEvent(body: any) {
		return EventsAPI.createEvent(body);
	}

	getAllEvents() {
		return EventsAPI.getAllEvents();
	}

	sendMessage(params) {
		return EventsAPI.sendMessage(params);
	}

	async getAllMessages(eventId: number | string) {
		const { data } = await EventsAPI.getAllMessages(eventId);
		return data.data;
	}

	getEventById(eventId: number | string) {
		return EventsAPI.getEventById(eventId);
	}
}

const eventsController = new EventsController();

export default eventsController;
