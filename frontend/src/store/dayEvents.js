import { csrfFetch } from "./csrf";

const LOAD_DAY_EVENTS = "events/loadDayEvents";

export const loadDayEvents = (events) => {
  return { type: LOAD_DAY_EVENTS, events };
};

export const getDayEvents = (date) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/day/${date}`);
  const events = await res.json();
  if (events) {
    dispatch(loadDayEvents(events));
  } else {
    return;
  }
};

const dayEventReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_DAY_EVENTS: {
      newState = action.events;
      return newState;
    }
    default:
      return state;
  }
};

export default dayEventReducer;
