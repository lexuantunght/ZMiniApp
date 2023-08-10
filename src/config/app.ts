import { NetworkConfig } from "./network";

const AppConfig = {
	base_url: 'http://localhost:8080',
	slogan: 'App slogan',
    ...NetworkConfig
}

export default AppConfig;