import { csrfFetch } from "./csrf";

//------------------------------------------------------login--------------------------
const LOGIN = "/LOGIN";

export const setUser = (user) => {
  return {
    type: LOGIN,
    user,
  };
};

export const login = (data) => async (dispatch) => {
  const res = await csrfFetch("/api/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data), // credential, password
  });

  const user = await res.json();
  dispatch(setUser(user));
};
//------------------------------------------------------login--------------------------
//
//
//
//------------------------------------------------------restore-user-------------------
export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};
//------------------------------------------------------restore-user-------------------
//
//
//
//------------------------------------------------------logout-------------------------
const LOGGEDOUT = "/LOGGEDOUT";
export const loggedOut = () => {
  return {
    type: LOGGEDOUT,
    user: null,
  };
};

export const logOut = () => async (dispatch) => {
  await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(loggedOut());
};
//------------------------------------------------------logout-------------------------
//
//
//
//-------------------------------------------------------reducer-----------------------

const sessionReducer = (state = { user: null }, action) => {
  let newState;
  switch (action.type) {
    case LOGIN: {
      const { user } = action;
      newState = { user };
      return newState;
    }
    case LOGGEDOUT: {
      newState = { user: null };
      return newState;
    }
    default:
      return state;
  }
};

export default sessionReducer;
