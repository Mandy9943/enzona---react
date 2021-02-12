import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getUserInfo as getUserInfoFromAPI } from "../data";
import {
  IUserInfoGetAllAction,
  IUserInfoLoadingAction,
  IUserInfoState,
  UserInfoActionTypes,
} from "../dataTypes";

const loading: ActionCreator<IUserInfoLoadingAction> = () => ({
  type: UserInfoActionTypes.LOADING,
});

export const getUserInfo: ActionCreator<
  ThunkAction<Promise<AnyAction>, IUserInfoState, null, IUserInfoGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());
    const userInfo = await getUserInfoFromAPI();
    return dispatch({
      type: UserInfoActionTypes.GET,
      userInfo,
    });
  };
};
