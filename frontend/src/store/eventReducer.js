import { csrfFetch } from "./csrf";
//--------------------------------------------load events-----------------------
const LOAD_EVENTS = "events/loadEvents";
export const loadEvents = (events) => {
  return { type: LOAD_EVENTS, events };
};

export const getEvents = () => async (dispatch) => {
  const res = await fetch("/api/events");
  const events = await res.json();
  console.log(events);
  dispatch(loadEvents(events));
};
//--------------------------------------------add events-----------------------

const ADD_EVENT = "events/addEvent";
export const addEvent = (newEvent) => ({
  type: ADD_EVENT,
  newEvent,
});

export const postEvent = (data) => async (dispatch) => {
  const res = await csrfFetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const newEvent = await res.json();

  dispatch(addEvent(newEvent));
};
//--------------------------------------------update events-----------------------
const UPDATE_EVENT = "events/updateEvent";
export const updateEvent = (updatedEvent) => ({
  type: UPDATE_EVENT,
  updatedEvent,
});
export const putEvent = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${data.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const updatedEvent = await res.json();

  dispatch(addEvent(updatedEvent));
};

//--------------------------------------------delete events-----------------------
const DELETE_EVENT = "events/deleteEvent";
export const removeEvent = (deletedEvent) => ({
  type: DELETE_EVENT,
  deletedEvent,
});
export const deleteEvent = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${data.id}`, {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const deletedEvent = await res.json();

  dispatch(addEvent(deletedEvent));
};

//---------------------------------------------reducer----------------------------
const initialState = { entries: {}, isLoading: true };

const eventReducer = (state = initialState, action) => {
  let newState = { ...state };
  let newEntries = { ...state.entries };

  switch (action.type) {
    case LOAD_EVENTS: {
      action.events.forEach((event) => (newEntries[event.id] = event));
      newState.entries = newEntries;
      return newState;
    }
    case ADD_EVENT: {
      newEntries[action.newEvent.id] = action.event;
      newState.entries = newEntries;
      return newState;
    }
    case UPDATE_EVENT: {
      newEntries[action.updatedEvent.id] = action.event;
      newState.entries = newEntries;
      return newState;
    }
    case DELETE_EVENT: {
      delete newEntries[action.deletedEvent.id];
      newState.entries = newEntries;
      return newState;
    }
    default:
      return state;
  }
};

export default eventReducer;
