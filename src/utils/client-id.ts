export class ClientId {
	current: number;
	constructor() {
		this.current = 0;
	}

	next() {
		this.current += 1;
		return this.current;
	}
}
