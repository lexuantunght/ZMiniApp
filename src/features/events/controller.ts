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

	getAllMessages(eventId: number | string) {
		return EventsAPI.getAllMessages(eventId);
	}

	getEventById(eventId: number | string) {
		return EventsAPI.getEventById(eventId);
	}
}

const eventsController = new EventsController();

export default eventsController;
