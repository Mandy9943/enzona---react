import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { userInfoReducer } from "./reducers/UserInfoReducer";
import { INotificationsState, IUserInfoState } from "./dataTypes";
import { NotificationReducer } from "./reducers/NotificationsReducer";

export interface IApplicationState {
  userInfo: IUserInfoState;
  notifications: INotificationsState;
}

const rootReducer = combineReducers<IApplicationState>({
  userInfo: userInfoReducer,
  notifications: NotificationReducer,
});

export default function configureStore(): Store<IApplicationState> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
