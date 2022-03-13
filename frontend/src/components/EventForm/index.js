import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import "./CreateEvent.css";
import { postEvent } from "../../store/eventReducer";
import { postRsvp } from "../../store/rsvp";
import { differenceInCalendarDays, isBefore } from "date-fns";

const EventForm = ({ showModal, setShowModal }) => {
  const [errors, setErrors] = useState([]);
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
  const [capacity, setCapacity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let submitErrors = [];
    const date = `${value.toDateString()} ${time}`;
    const realVenue = venues.find((ven) => ven.name === venue);
    const realType = types.find((typ) => typ.name === type);
    if (!sessionUser.id) {
      submitErrors.push("You must be a logged in user to create an Event.");
      setVenue("");
    }
    console.log(realVenue);
    if (!realVenue) {
      submitErrors.push("You must choose a venue for your Event.");
    }
    if (!realType) {
      submitErrors.push("You must choose a Category for your Event.");
      setType("");
    }
    if (name.length > 20) {
      submitErrors.push("Your Events name must be less than 20 characters.");
      setName("");
    }
    if (!Number(capacity)) {
      submitErrors.push("You must choose a capacity for your event.");
    }

    if (submitErrors.length) {
      return setErrors(submitErrors);
    } else {
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
    }

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
    if (view === "month") {
      return isBefore(date, new Date());
    }
  }

  function disabledColorTile({ date, view }) {
    if (view === "month") {
      if (isBefore(date, new Date())) {
        return "disableColor";
      }
    }
  }
  //----------------------------------------------------------------------calendar stuff

  return (
    <div className="top_modal_div">
      <button
        className="card collapse back"
        onClick={() => setShowModal(false)}
      >
        <i className="fa-solid fa-circle-chevron-left"></i>
      </button>
      <div className="container column">
        <h1>Create Event</h1>
        <form
          className="container row"
          onSubmit={handleSubmit}
          style={{ textAlign: "center" }}
        >
          <div className="container column">
            <span style={{ textAlign: "center" }}>
              {new Date(value).toDateString()}
            </span>
            <Calendar
              className={"card"}
              onChange={onChange}
              value={value}
              tileDisabled={tileDisabled}
              tileContent={tileContent}
              tileClassName={disabledColorTile}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "10px",
              padding: "0.5rem",
              margin: "1rem 0",
            }}
          >
            <h4 style={{ margin: "0" }}>Venue</h4>
            <select className="card" onChange={(e) => setVenue(e.target.value)}>
              <option>Pick Your Venue!</option>
              {venues.map((venue) => (
                <option key={venue.id}>{venue.name}</option>
              ))}
            </select>
            <h4 style={{ margin: "0" }}>Type</h4>
            <select className="card" onChange={(e) => setType(e.target.value)}>
              <option>Pick a Category!</option>
              {types.map((type) => (
                <option key={type.id}>{type.name}</option>
              ))}
            </select>
            <h4 style={{ margin: "0" }}>Name</h4>
            <input
              className="card"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Event Name"
              name="title"
              required
            />
            <h4 style={{ margin: "0" }}>Capacity</h4>
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
                <h4 style={{ margin: "0" }}>Time</h4>
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

            <button className="collapse" type="submit">
              Submit
            </button>
          </div>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
