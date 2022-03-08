const LOAD_TYPES = "types/loadtypes";
export const loadTypes = (types) => {
  return { type: LOAD_TYPES, types };
};

export const getTypes = () => async (dispatch) => {
  const res = await fetch("/api/types");
  const types = await res.json();
  dispatch(loadTypes(types));
};

const initialState = { entries: {}, isLoading: true };

const typeReducer = (state = initialState, action) => {
  let newState = { ...state };
  let newEntries = { ...state.entries };

  switch (action.type) {
    case LOAD_TYPES: {
      action.types.forEach((type) => (newEntries[type.id] = type));
      newState.entries = newEntries;
      return newState;
    }

    default:
      return state;
  }
};
export default typeReducer;
