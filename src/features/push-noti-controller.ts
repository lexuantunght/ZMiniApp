import { MainAPI } from 'core/api';

type PushNotiParams = {
	uid: string;
	title: string;
	contentTitle: string;
	contentDescription: string;
	buttonText: string;
	buttonUrl: string;
};

class PushNotiController {
	pushNoti(params: PushNotiParams) {
		MainAPI.pushNoti(params);
	}
}

const pushNotiController = new PushNotiController();

export default pushNotiController;
