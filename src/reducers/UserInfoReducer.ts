import { Reducer } from "redux";
import {
  UserInfoAction,
  IUserInfoState,
  UserInfoActionTypes,
} from "../dataTypes";

const initialState: IUserInfoState = {
  user_info: {
    fullname: "",
    img: "dist/images/avatar1.png",
    username: "",
    email: "",
    address: "",
    id_number: 0,
    sex: "M",
    birthday: "",
    phone: 0,
  },
  loading: false,
};

export const userInfoReducer: Reducer<IUserInfoState, UserInfoAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UserInfoActionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case UserInfoActionTypes.GET:
      return {
        ...state,
        user_info: action.userInfo,
        loading: false,
      };

    default:
      break;
  }

  return state;
};
