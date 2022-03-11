import { csrfFetch } from "./csrf";

const UPDATE_CURRENT_EVENT = "event/updateCurrentEvent";

export const updateCurrentEvent = (event) => {
  return { type: UPDATE_CURRENT_EVENT, event };
};

export const updateCurrentEventState = (event) => async (dispatch) => {
  dispatch(updateCurrentEvent(event));
};

const LOAD_CURRENT_EVENT = "event/getCurrentEvent";
export const loadCurrentEvent = (event) => {
  return { type: LOAD_CURRENT_EVENT, event };
};

export const getCurrentEvent = (eventId) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${eventId}`, {
    method: "GET",
  });
  const event = await res.json();
  dispatch(loadCurrentEvent(event));
};

const currentEventReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_CURRENT_EVENT: {
      newState = action.event;
      return newState;
    }
    case UPDATE_CURRENT_EVENT: {
      newState[action.event.id] = action.event;
      return newState;
    }
    default:
      return state;
  }
};

export default currentEventReducer;
