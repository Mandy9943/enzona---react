import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { userInfoReducer } from "./reducers/UserInfoReducer";
import { IUserInfoState } from "./dataTypes";

export interface IApplicationState {
  userInfo: IUserInfoState;
}

const rootReducer = combineReducers<IApplicationState>({
  userInfo: userInfoReducer,
});

export default function configureStore(): Store<IApplicationState> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
