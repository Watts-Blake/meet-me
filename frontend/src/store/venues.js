const LOAD_VENUES = "venues/loadVenues";
export const loadVenues = (venues) => {
  return { type: LOAD_VENUES, venues };
};

export const getVenues = () => async (dispatch) => {
  const res = await fetch("/api/venues");
  const venues = await res.json();
  dispatch(loadVenues(venues));
};

const initialState = { entries: {}, isLoading: true };

const venueReducer = (state = initialState, action) => {
  let newState = { ...state };
  let newEntries = { ...state.entries };

  switch (action.type) {
    case LOAD_VENUES: {
      action.venues.forEach((venue) => (newEntries[venue.id] = venue));
      newState.entries = newEntries;
      return newState;
    }

    default:
      return state;
  }
};
export default venueReducer;
