import { atom } from "recoil";
import { GetUserInfoReturns } from 'zmp-sdk';

export const userState = atom<GetUserInfoReturns["userInfo"]>({
  key: "user",
  default: {
    id: '12345678',
    name: 'Zalo',
    avatar: 'ZA',
  }
})
