export type sex_type = "M" | "F";
export type bank_type = "Banco Metropolitano" | "BANDEC" | "BPA";
export type currency_type = "CUP" | "USD";
export type operation_way_type = "Crédito" | "Débito";

export interface IUserInfo {
  fullname: string;
  img: string;
  username: string;
  email: string;
  address: string;
  id_number: number;
  sex: sex_type;
  birthday: string;
  phone: number;
}

export interface IUserLogin {
  tel_ema: string;
  password: string;
}

export interface IOperation {
  name: string;
  amount: number;
  way: operation_way_type;
  date: Date;
}

export interface IUserBankAccount {
  id: number;
  bank: bank_type;
  name: string;
  currency: currency_type;
  number: number;
  active: boolean;
  avilable_money?: number;
  contable_money?: number;
  card?: string;
  number_account?: number;
}

export interface IUserNotification {
  readed: boolean;
  image: string;
  name: string;
  money_amount?: number;
  date: string;
  currency: "cup" | "usd";
  notification: string;
  status?: "Aceptada" | "Fallida" | "Pendiente";
  hour: string /* Pendiente a revision */;
}

/* Hasta aqui llegan los usuarios */

/* Falta toda la parte del bullvebar */

/* Tipos para la app */

export enum UserInfoActionTypes {
  GET = "USERINFO/GETALL",
  LOADING = "USERINFO/LOADING",
}

export interface IUserInfoGetAllAction {
  type: UserInfoActionTypes.GET;
  userInfo: IUserInfo;
}

export interface IUserInfoLoadingAction {
  type: UserInfoActionTypes.LOADING;
}

export type UserInfoAction = IUserInfoGetAllAction | IUserInfoLoadingAction;

export interface IUserInfoState {
  readonly user_info: IUserInfo;
  readonly loading: boolean;
}
