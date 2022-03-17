import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import sessionReducer from "./session";
import eventReducer from "./eventReducer";
import venueReducer from "./venues";
import typeReducer from "./types";
import rsvpReducer from "./rsvp";
import currentEventReducer from "./setCurrentEvent";
import dayEventReducer from "./dayEvents";
import groupReducer from "./groups";

const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  event: eventReducer,
  venue: venueReducer,
  type: typeReducer,
  rsvp: rsvpReducer,
  currentEvent: currentEventReducer,
  dayEvents: dayEventReducer,
  group: groupReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
