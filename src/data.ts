import { IUser } from "./dataTypes";

export const users: IUser[] = [
  {
    user_info: {
      fullname: "Armando Cesar Martin Calderon",
      img: "img/armando.png",
      username: "aCalderon866",
      email: "armicald@gmail.com",
      id_number: 99092206360,
      sex: "M",
      birthday: new Date(),
      address: "Calle 7ma entre J y K",
    },
    useer_login: {
      tel_ema: "58378451",
      password: "1234",
    },
    user_bank_acounts: {
      accounts: [
        {
          bank: "Banco Metropolitano",
          name: "Armando Martin",
          currency: "USD",
          number: 93255265231241,
          active: false,
          avilable_money: 60,
          contable_money: 60,
          card: "BanMet 685",
          number_account: 806040503020,
          last_operations: [
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
          ],
        },
        {
          bank: "Banco Metropolitano",
          name: "Armando Martin",
          currency: "CUP",
          number: 906026524522356,
          active: false,
          avilable_money: 2000,
          contable_money: 2000,
          card: "BanMet 685",
          number_account: 806040503020,
          last_operations: [
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
          ],
        },
      ],
    },
    user_notifications: [
      {
        name: "Tranferencia recibida",
        money_amount: 250,
        date: new Date(),
        status: true,
        hour: "11.:52 pm",
      },
      {
        name: "Tranferencia recibida",
        money_amount: 360,
        date: new Date(),
        status: true,
        hour: "10.:22 am",
      },
      {
        name: "Soicitud aceptada",
        date: new Date(),
        hour: "7.:52 pm",
      },
      {
        name: "Tranferencia recibida",
        money_amount: 25,
        date: new Date(),
        status: true,
        hour: "6.:03 pm",
      },
    ],
  },
];
