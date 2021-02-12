import {
  IOperation,
  IUserBankAccount,
  IUserInfo,
  IUserLogin,
  IUserNotification,
} from "./dataTypes";

const user_info: IUserInfo = {
  fullname: "Armando Cesar Martin Calderon",
  img: "dist/images/avatar2.png",
  username: "aCalderon866",
  email: "armicald@gmail.com",
  id_number: 99092206360,
  sex: "M",
  birthday: "12/5/2020",
  address: "Calle 7ma entre J y K",
  phone: 58379931,
};

const useer_login: IUserLogin = {
  tel_ema: "58378451",
  password: "1234",
};

const user_bank_acounts: IUserBankAccount[] = [
    {
      id: 4515,
      bank: "Banco Metropolitano",
      name: "Armando Martin",
      currency: "USD",
      number: 93255265231241,
      active: false,
      avilable_money: 60,
      contable_money: 60,
      card: "BanMet 685",
      number_account: 806040503020,
    },
    {
      id: 45152,
      bank: "Banco Metropolitano",
      name: "Armando Martin",
      currency: "CUP",
      number: 906026524522356,
      active: false,
      avilable_money: 2000,
      contable_money: 2000,
      card: "BanMet 685",
      number_account: 806040503020,
    },
  ],
  user_notifications: IUserNotification[] = [
    {
      name: "Armando Martin Calderon",
      money_amount: 250,
      date: "6/6/2020",
      status: "Aceptada",
      hour: "11.:52 pm",
      readed: true,
      image: "dist/images/avatar2.png",
      notification: "Tarnsferecnia recibida",
      currency: "cup",
    },
    {
      name: "Armando Martin Calderon",
      money_amount: 250,
      date: "6/6/2020",
      status: "Aceptada",
      hour: "11.:52 pm",
      readed: true,
      image: "dist/images/avatar2.png",
      notification: "Tarnsferecnia recibida",
      currency: "cup",
    },
    {
      name: "Armando Martin Calderon",
      money_amount: 250,
      date: "6/6/2020",
      status: "Aceptada",
      hour: "11.:52 pm",
      readed: true,
      image: "dist/images/avatar2.png",
      notification: "Tarnsferecnia recibida",
      currency: "cup",
    },
    {
      name: "Armando Martin Calderon",
      money_amount: 250,
      date: "6/6/2020",
      status: "Aceptada",
      hour: "11.:52 pm",
      readed: true,
      image: "dist/images/avatar2.png",
      notification: "Tarnsferecnia recibida",
      currency: "cup",
    },
  ];

/* Operations */

const operation1: IOperation[] = [
  {
    name: "Nómina",
    amount: 200,
    way: "Crédito",
    date: new Date(),
  },
  {
    name: "Crédito",
    amount: 1500,
    way: "Crédito",
    date: new Date(),
  },
  {
    name: "Pago al servcio de Electricidad",
    amount: 1000,
    way: "Débito",
    date: new Date(),
  },
  {
    name: "Tranferencia",
    amount: 200,
    way: "Débito",
    date: new Date(),
  },
  {
    name: "Tranferencia",
    amount: 200,
    way: "Crédito",
    date: new Date(),
  },
];

const operation2: IOperation[] = [
  {
    name: "Nómina",
    amount: 200,
    way: "Crédito",
    date: new Date(),
  },
  {
    name: "Crédito",
    amount: 1500,
    way: "Crédito",
    date: new Date(),
  },
  {
    name: "Pago al servcio de Electricidad",
    amount: 1000,
    way: "Débito",
    date: new Date(),
  },
  {
    name: "Tranferencia",
    amount: 200,
    way: "Débito",
    date: new Date(),
  },
  {
    name: "Tranferencia",
    amount: 200,
    way: "Crédito",
    date: new Date(),
  },
];

const last_operations: IOperation[] = operation1;

/* Faking a time to the server response (Faking API time to response) */
const wait = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const getUserInfo = async (): Promise<IUserInfo> => {
  await wait(1000);
  return user_info;
};

export const getUserNotifications = async (): Promise<IUserNotification[]> => {
  await wait(1000);
  return user_notifications;
};
