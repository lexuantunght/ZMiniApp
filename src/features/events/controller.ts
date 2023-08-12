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

	getAllMessages(eventId: number) {
		return EventsAPI.getAllMessages(eventId);
	}
}

const eventsController = new EventsController();

export default eventsController;
