import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import "./CreateEvent.css";
import { postEvent } from "../../store/eventReducer";
import { differenceInCalendarDays, isBefore } from "date-fns";

const EventForm = ({ showModal, setShowModal }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const [value, setValue] = useState(new Date());
  const dispatch = useDispatch();
  const venuesObj = useSelector((state) => state.venue.entries);
  const venues = Object.values(venuesObj);
  const typesObj = useSelector((state) => state.type.entries);
  const types = Object.values(typesObj);

  const [venue, setVenue] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState(5);

  const reset = () => {
    setVenue("");
    setType("");
    setName("");
    setTime(new Date().toString());
    setCapacity(5);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = `${value.toDateString()} ${time}`;
    const realVenue = venues.find((ven) => ven.name === venue);
    const realType = types.find((typ) => typ.name === type);

    const newEvent = {
      hostId: sessionUser.id,
      venueId: realVenue.id,
      typeId: realType.id,
      name,
      date: date.toString(),
      capacity,
    };

    dispatch(postEvent(newEvent));
    setShowModal(false);
    // reset();
  };

  //----------------------------------------------------------------------calendar stuff
  const eventsObj = useSelector((state) => state.event);
  const events = Object.values(eventsObj);
  const eventDateArr = events.map((event) => new Date(event.date));

  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }

  function tileContent({ date, view }) {
    // Add class to tiles in month view only
    if (view === "month") {
      if (eventDateArr.find((dDate) => isSameDay(dDate, date))) {
        return (
          <div
            style={{
              fontSize: "8px",
            }}
          >
            🔵
          </div>
        );
      } else {
        return <div>•</div>;
      }
    }
  }

  function onChange(nextValue) {
    setValue(nextValue);
  }

  function tileDisabled({ date, view }) {
    // Add class to tiles in month view only
    if (view === "month") {
      // Check if a date React-Calendar wants to check is within any of the ranges
      return isBefore(date, new Date());
    }
  }
  //----------------------------------------------------------------------calendar stuff

  return (
    <div className="container column">
      <h1>Create Event</h1>
      <form className="container row" onSubmit={handleSubmit}>
        <div>
          <Calendar
            className={"card"}
            onChange={onChange}
            value={value}
            tileDisabled={tileDisabled}
            tileContent={tileContent}
          />
        </div>
        <div id="createForm">
          <select className="card" onChange={(e) => setVenue(e.target.value)}>
            <option>Pick Your Venue!</option>
            {venues.map((venue) => (
              <option key={venue.id}>{venue.name}</option>
            ))}
          </select>
          <select className="card" onChange={(e) => setType(e.target.value)}>
            <option>Pick a Category!</option>
            {types.map((type) => (
              <option key={type.id}>{type.name}</option>
            ))}
          </select>
          <input
            className="card"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Event Name"
            name="title"
          />
          <select
            className="card"
            onChange={(e) => setCapacity(e.target.value)}
          >
            <option>Capacity</option>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
            <option>30</option>
            <option>35</option>
            <option>40</option>
            <option>45</option>
            <option>50</option>
            <option>55</option>
            <option>60</option>
            <option>65</option>
            <option>70</option>
            <option>75</option>
            <option>80</option>
            <option>85</option>
            <option>90</option>
            <option>95</option>
            <option>100</option>
            <option>125</option>
            <option>150</option>
            <option>175</option>
            <option>200</option>
            <option>225</option>
            <option>250</option>
            <option>275</option>
            <option>300</option>
            <option>325</option>
            <option>350</option>
            <option>375</option>
            <option>400</option>
            <option>425</option>
            <option>450</option>
            <option>475</option>
            <option>500</option>
          </select>
          <div></div>
          <div className="card">
            <div>
              <select
                className="card"
                onChange={(e) => setTime(e.target.value)}
              >
                <option>12:00 AM</option>
                <option>1:00 AM</option>
                <option>2:00 AM</option>
                <option>3:00 AM</option>
                <option>4:00 AM</option>
                <option>5:00 AM</option>
                <option>6:00 AM</option>
                <option>7:00 AM</option>
                <option>8:00 AM</option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
                <option>5:00 PM</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
                <option>10:00 PM</option>
                <option>11:00 PM</option>
              </select>
            </div>
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
