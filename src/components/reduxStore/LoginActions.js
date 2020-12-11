import { Types } from "./actionsTypes";
import store from "./Store";

export const logUserIn = (username, password) => {
  if (
    username === store.getState().loginCreds.username &&
    password === store.getState().loginCreds.password
  ) {
    return {
      type: Types.LOGIN,
      payload: { name: "SuperMan" },
    };
  } else if (
    username !== store.getState().loginCreds.username &&
    password === store.getState().loginCreds.password
  )
    return {
      type: Types.ERROR,
      error: alert(
        "Sorry we coulden't find an account with that username/email"
      ),
    };
  else if (
    username === store.getState().loginCreds.username &&
    password !== store.getState().loginCreds.password
  )
    return {
      type: Types.ERROR,
      error: alert("Sorry we coulden't find an account with that password"),
    };
  else {
    return alert("Sorry we coulden't find an account with that email/password");
  }
};

export const loginAction = {
  login: (user) => ({ type: Types.LOGIN, payload: { user } }),
};
