import { csrfFetch } from "./csrf";
//--------------------------------------------load events-----------------------
const LOAD_EVENTS = "events/loadEvents";
export const loadEvents = (events) => {
  return { type: LOAD_EVENTS, events };
};

export const getEvents = () => async (dispatch) => {
  const res = await fetch("/api/events");
  const events = await res.json();
  dispatch(loadEvents(events));
};
//--------------------------------------------add events-----------------------

const ADD_EVENT = "events/addEvent";
export const addEvent = (event) => ({
  type: ADD_EVENT,
  event,
});

export const postEvent = (data) => async (dispatch) => {
  const res = await csrfFetch("/api/events", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const event = await res.json();

  dispatch(addEvent(event));
};
//--------------------------------------------update events-----------------------
const UPDATE_EVENT = "events/updateEvent";
export const updateEvent = (event) => ({
  type: UPDATE_EVENT,
  event,
});
export const putEvent = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${data.eventId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const updatedEvent = await res.json();
  console.log("babessssssssssssssssssssssss", updatedEvent);

  dispatch(updateEvent(updatedEvent));
};

//--------------------------------------------delete events-----------------------
const DELETE_EVENT = "events/deleteEvent";
export const removeEvent = (eventId) => ({
  type: DELETE_EVENT,
  eventId,
});
export const deleteEvent = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${data}`, {
    method: "DELETE",
    body: data,
  });

  const { eventId } = await res.json();

  dispatch(removeEvent(eventId));
  console.log(eventId);
};
//---------------------------------------------reducer----------------------------

const eventReducer = (state = {}, action) => {
  let newState = { ...state };

  switch (action.type) {
    case LOAD_EVENTS: {
      action.events.forEach((event) => {
        return (newState[event.id] = event);
      });
      return newState;
    }
    case ADD_EVENT: {
      newState[action.event.id] = { ...action.event };

      return newState;
    }
    case UPDATE_EVENT: {
      newState[action.event.id] = action.event;
      return newState;
    }
    case DELETE_EVENT: {
      delete newState[action.eventId];
      return newState;
    }
    default:
      return state;
  }
};

export default eventReducer;
