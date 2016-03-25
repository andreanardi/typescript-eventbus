export class EventBus {

	static addEventHandler(event, fn) {
		$(this).bind(event, fn);
	}

	static removeEventHandler(event, fn) {
		$(this).unbind(event, fn);
	}

	static fireEvent(event, data) {
		$(this).trigger(event, data);
	}
}
