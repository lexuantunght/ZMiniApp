import axios from 'axios';
import AppConfig from 'config/app';

class NetworkAdapter {
	private config: Record<string, any>;
	constructor(
		config = {
			headers: { ...AppConfig.network.headers },
			withCredentials: AppConfig.network.with_credentials,
		}
	) {
		this.config = config;
	}

	public async get(url: string) {
		return axios.get(url, this.config);
	}

	public async post(url: string, data: any, headers?: any) {
		let config = this.config;
		if (headers) {
			config = { ...config, headers: { ...config.headers, ...headers } };
		}
		return axios.post(url, data, config);
	}

	public async put(url: string, data: any) {
		return axios.put(url, data, this.config);
	}

	public async delete(url: string) {
		return axios.delete(url, this.config);
	}
}

export default NetworkAdapter;
