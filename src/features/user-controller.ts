import { MainAPI } from 'core/api';
import { GetUserInfoReturns, getUserInfo } from 'zmp-sdk';

class UserController {
	userInfo!: GetUserInfoReturns['userInfo'];
	constructor() {
		// @ts-ignore
		this.userInfo = {};
	}
	loadProfile() {
		return getUserInfo().then((info) => {
			if (info.userInfo) {
				this.userInfo = info.userInfo;
				MainAPI.setUser(this.userInfo);
			}
		});
	}
}

const userController = new UserController();

export default userController;
