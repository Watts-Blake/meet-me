const LOAD_USERS = "users/loadUsers";
export const loadUsers = (users) => {
  return { type: LOAD_USERS, users };
};

export const getVenues = () => async (dispatch) => {
  const res = await fetch("/api/users");
  const users = await res.json();
  dispatch(loadUsers(users));
};

const initialState = { entries: {}, isLoading: true };

const usersReducer = (state = initialState, action) => {
  let newState = { ...state };
  let newEntries = { ...state.entries };

  switch (action.type) {
    case LOAD_USERS: {
      action.users.forEach((user) => (newEntries[user.id] = user));
      newState.entries = newEntries;
      return newState;
    }

    default:
      return state;
  }
};
export default usersReducer;
