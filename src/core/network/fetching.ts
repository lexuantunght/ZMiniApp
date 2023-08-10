import AppConfig from 'config/app';
import NetworkAdapter from './adapter';
import { NetworkError } from './network-error';

export class Fetching {
	private adapter;
	constructor() {
		this.adapter = new NetworkAdapter();
	}

	public async get(path: string) {
		return this.adapter.get(`${AppConfig.base_url}${path}`);
	}

	public async post(path: string, body: unknown) {
		return this.adapter.post(`${AppConfig.base_url}${path}`, body).catch((err) => {
			if (err.response?.data?.message) {
				throw new NetworkError(err.response.status, err.response.data.message);
			}
			throw new NetworkError(err.code, err.message);
		});
	}

	public async put(path: string, body: unknown) {
		return this.adapter.put(`${AppConfig.base_url}${path}`, body).catch((err) => {
			if (err.response?.data?.message) {
				throw new NetworkError(err.response.status, err.response.data.message);
			}
			throw new NetworkError(err.code, err.message);
		});
	}

	public async delete(path: string) {
		return this.adapter.delete(`${AppConfig.base_url}${path}`).catch((err) => {
			if (err.response?.data?.message) {
				throw new NetworkError(err.response.status, err.response.data.message);
			}
			throw new NetworkError(err.code, err.message);
		});
	}
}
