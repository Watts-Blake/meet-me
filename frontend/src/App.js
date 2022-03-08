import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignUpFormPage from "./components/SignUpFormPage";
import EventForm from "./components/EventForm";
import EventList from "./components/EventsList";
import SingleEvent from "./components/SingleEvent";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [value, setValue] = useState(new Date());
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
            <EventList></EventList>
          </Route>
          <Route path="/events/add">
            <EventForm></EventForm>
          </Route>
          <Route path="/events/:id">
            <SingleEvent></SingleEvent>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
