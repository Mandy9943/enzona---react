type sex_type = "M" | "F";
type bank_type = "Banco Metropolitano" | "BANDEC" | "BPA";
type curreny_type = "CUP" | "USD";
type operation_way_type = "Crédito" | "Débito";

interface IUserInfo {
  fullname: string;
  img: string;
  username: string;
  email: string;
  address: string;
  id_number: number;
  sex: sex_type;
  birthday: Date;
}

interface IUserLogin {
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
  bank: bank_type;
  name: string;
  currency: curreny_type;
  number: number;
  active: boolean;
  avilable_money: number;
  contable_money: number;
  card: string;
  number_account: number;
  last_operations: IOperation[];
}
export interface IUserBankAccounts {
  accounts: IUserBankAccount[];
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

export interface IUser {
  user_info: IUserInfo;
  useer_login: IUserLogin;
  user_bank_acounts: IUserBankAccounts;
  user_notifications: IUserNotification[];
}

export interface IUsers {
  users: IUser[];
}

/* Hasta aqui llegan los usuarios */

/* Falta toda la parte del bullvebar */
