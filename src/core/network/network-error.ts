export class NetworkError {
	readonly code: number | string;
	readonly message?: string;
	constructor(code: number | string, message?: string) {
		this.code = code;
		this.message = message;
	}
}

export enum HttpErrorCode {
	BAD_REQUEST = 'ERR_BAD_REQUEST',
	TOO_MANY_REQUEST = 429,
	ERROR_INTERNAL_SERVER = 500,
	BAD_GATE = 502,
	SERVICE_UNAVAILABLE = 503,
	GATEWAY_TIMEOUT = 504,
	NOT_FOUND = 404,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	TIMED_OUT = 408,
	SUCCESS = 200,
	CREATED = 201,
	ERR_NETWORK = 'ERR_NETWORK',
	ERR_CONNECTION_TIMED_OUT = 'ERR_CONNECTION_TIMED_OUT',
}

export enum NetworkStatusType {
	CONNECTED = 1,
	DISCONNECTED = -1,
	CHECKING = 0,
	UNAVAILABLE = -2,
}

export type NetworkCheckerEventMap = {
	CHANGE: NetworkStatusType;
};
