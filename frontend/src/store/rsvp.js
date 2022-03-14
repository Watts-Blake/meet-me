import { csrfFetch } from "./csrf";
//--------------------------------------------load -----------------------
const LOAD_RSVPS = "rsvps/loadRsvps";
export const loadRsvps = (rsvpList) => {
  return { type: LOAD_RSVPS, rsvpList };
};

export const getRsvps = (eventId) => async (dispatch) => {
  const res = await fetch(`/api/events/${eventId}/rsvp`);
  const rsvpList = await res.json();
  dispatch(loadRsvps(rsvpList));
};
//--------------------------------------------add-----------------------

const ADD_RSVP = "rsvps/addRsvp";
export const addRsvp = (rsvp) => ({
  type: ADD_RSVP,
  rsvp,
});

export const postRsvp = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${data.eventId}/rsvp`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const rsvp = await res.json();

  dispatch(addRsvp(rsvp));
};

//--------------------------------------------delete-----------------------
const DELETE_RSVP = "rsvps/deleteRsvp";
export const removeRsvp = (rsvpId) => ({
  type: DELETE_RSVP,
  rsvpId,
});
export const deleteRsvp = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/events/${data.eventId}/${data.userId}`, {
    method: "DELETE",
    body: JSON.stringify(data),
  });

  const rsvp = await res.json();

  dispatch(removeRsvp(rsvp.id));
};
//---------------------------------------------reducer----------------------------

const rsvpReducer = (state = {}, action) => {
  let newState = { ...state };

  switch (action.type) {
    case LOAD_RSVPS: {
      newState = {};
      action.rsvpList.forEach((rsvp) => {
        return (newState[rsvp.id] = rsvp);
      });
      return newState;
    }
    case ADD_RSVP: {
      newState[action.rsvp.id] = { ...action.rsvp };

      return newState;
    }
    case DELETE_RSVP: {
      delete newState[action.rsvpId];
      return newState;
    }
    default:
      return state;
  }
};

export default rsvpReducer;
