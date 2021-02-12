import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getUserNotifications } from "../data";
import {
  INotificationGetAllAction,
  INotificationLoadingAction,
  INotificationsState,
  NotificationsActionTypes,
} from "../dataTypes";

export const loading: ActionCreator<INotificationLoadingAction> = () => ({
  type: NotificationsActionTypes.LOADING,
});

export const getNotifications: ActionCreator<
  ThunkAction<
    Promise<AnyAction>,
    INotificationsState,
    null,
    INotificationGetAllAction
  >
> = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());
    const notifications = await getUserNotifications();

    return dispatch({
      type: NotificationsActionTypes.GET,
      notifications,
    });
  };
};
