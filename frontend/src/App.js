import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Route, Switch } from "react-router-dom";
import SignUpFormPage from "./components/SignUpFormPage";
import SingleEventModal from "./components/SingleEvent/SingleEventModal";

import Splash from "./components/Splash";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignUpFormPage />
          </Route>
          <Route exact path="/">
            <Splash></Splash>
          </Route>
          <Route path="*">404 the page youve requested does not exist</Route>
          <Route path="/events/:id">
            <SingleEventModal></SingleEventModal>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
