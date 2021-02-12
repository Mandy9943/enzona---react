import { Reducer } from "redux";
import {
  NotificationsActions,
  NotificationsActionTypes,
  INotificationsState,
} from "../dataTypes";

const initialState: INotificationsState = {
  loading: false,
  notifications: [],
};

export const NotificationReducer: Reducer = (
  state: INotificationsState = initialState,
  action: NotificationsActions
) => {
  switch (action.type) {
    case NotificationsActionTypes.GET:
      state = {
        ...state,
        notifications: action.notifications,
        loading: false,
      };
      console.log("state en action.type === get ", state);

      return state;

    case NotificationsActionTypes.LOADING:
      state = {
        ...state,
        loading: true,
      };
      console.log("state en action.type === loading ", state);
      return state;

    default:
      return state;
  }
};
