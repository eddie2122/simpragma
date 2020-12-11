import { Types } from "./actionsTypes";

export const initialState = {
  isLoggedIn : false,
  userProfile: {},
  loginError: false,
  loginCreds: {
    username: "edwinrichard2122@gmail.com",
    password: "edwin123",
  },

  usersData: [
    {
      id: 1,
      name: "test1",
      age: "11",
      gender: "male",
      email: "test1@gmail.com",
      phoneNo: "9415346313",
    },
    {
      id: 2,
      name: "test2",
      age: "12",
      gender: "male",
      email: "test2@gmail.com",
      phoneNo: "9415346314",
    },
    {
      id: 3,
      name: "test3",
      age: "13",
      gender: "male",
      email: "test3@gmail.com",
      phoneNo: "9415346315",
    },
    {
      id: 4,
      name: "test4",
      age: "14",
      gender: "male",
      email: "test4@gmail.com",
      phoneNo: "9415346316",
    },
    {
      id: 5,
      name: "test5",
      age: "15",
      gender: "male",
      email: "test5@gmail.com",
      phoneNo: "9415346317",
    },
    {
      id: 6,
      name: "test6",
      age: "16",
      gender: "male",
      email: "test6@gmail.com",
      phoneNo: "9415346318",
    },
  ],
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state,
        profile: action.payload,
        isLoggedIn: true,
      };
    case Types.ERROR:
      return {
        ...state,
        logError: action.error,
        loginError: true,
        // isLoggedIn: false
      };
    default:
      return state;
  }
};
