import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Route, Switch } from "react-router-dom";
import SignUpFormPage from "./components/SignUpFormPage";
import SingleEventModal from "./components/SingleEvent/SingleEventModal";
import { getEvents } from "./store/eventReducer";
import { getTypes } from "./store/types";
import { getVenues } from "./store/venues";
import Slash from "./components/Slash";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getVenues());
  });

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <div className="app">
      <Navigation className="nav" isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignUpFormPage />
          </Route>
          <Route exact path="/">
            <Slash></Slash>
          </Route>
          <Route path="*">404 the page youve requested does not exist</Route>
          <Route path="/events/:id">
            <SingleEventModal></SingleEventModal>
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
