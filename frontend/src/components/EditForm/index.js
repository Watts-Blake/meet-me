import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import { putEvent } from "../../store/eventReducer";
import { differenceInCalendarDays, isBefore } from "date-fns";
import DeleteModal from "../DeleteModal/DeleteModal";
import {
  getCurrentEvent,
  updateCurrentEventState,
} from "../../store/setCurrentEvent";
const hoursTransform = (hours) => {
  if (hours <= 12) {
    return `${hours}:00 AM`;
  } else if (hours === 0) {
    return `1:00 AM`;
  } else {
    return `${hours - 12}:00 PM`;
  }
};

const EditEventForm = ({
  setShowEventListModal,
  setShowSingleEventModal,
  setShowEditModal,
}) => {
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  //-----------------------------------------------------------finding session user
  const sessionUser = useSelector((state) => state.session.user);
  const event = useSelector((state) => state.currentEvent);
  const hostId = sessionUser.id;

  const [value, setValue] = useState(new Date(event.date));
  //----------------------------------------------------------------getting venues and typs arrays for comparison
  const venuesObj = useSelector((state) => state.venue.entries);
  const allVenues = Object.values(venuesObj);

  const typesObj = useSelector((state) => state.type.entries);
  const allTypes = Object.values(typesObj);
  //----------------------------------------------------------setting slices of state for thunk update
  const [venue, setVenue] = useState(event.Venue.name);
  const [venueId, setVenueId] = useState(event.Venue.id);
  const [type, setType] = useState(event.Type.name);
  const [typeId, setTypeId] = useState(event.Type.Id);
  const [name, setName] = useState(event.name);
  const [hours, setHours] = useState(new Date(event.date).getHours());
  const [time, setTime] = useState(hoursTransform(hours));
  const [date, setDate] = useState(event.date);
  const [capacity, setCapacity] = useState(event.capacity);
  //----------------------------------------------find new event info on change of any of these dependencies
  useEffect(() => {
    const newVenue = allVenues.find((ven) => ven.name === venue);
    setVenueId(newVenue.id);
    const newType = allTypes.find((typ) => typ.name === type);
    setTypeId(newType.id);
    const realDate = `${value.toDateString()} ${time}`;
    setDate(realDate);
    // setHours(new Date(event.).getHours());
    // setTime(hoursTransform(hours));
  }, [venue, type, allVenues, allTypes, time, value, hours, event.date]);
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
          <span
            style={{
              fontSize: "8px",
            }}
          >
            🔵
          </span>
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
  const reset = () => {
    setVenueId("");
    setTypeId("");
    setName("");
    setTime(new Date().toString());
    setCapacity(5);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let submitErrors = [];
    if (!sessionUser.id) {
      submitErrors.push("You must be a logged in user to create an Event.");
      setVenue("");
    }

    if (!venueId) {
      submitErrors.push("You must choose a venue for your Event.");
    }
    if (!typeId) {
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
      const updatedEvent = {
        eventId: event.id,
        hostId,
        venueId,
        typeId,
        name,
        date: date.toString(),
        capacity,
      };

      await dispatch(putEvent(updatedEvent));
      await dispatch(getCurrentEvent(event.id));
      setShowEditModal(false);
    }

    // reset();
  };
  const handleBack = (e) => {
    e.preventDefault();
    setShowEditModal(false);
  };

  return (
    <div className="top_modal_div">
      <button className="card collapse back" onClick={handleBack}>
        <i className="fa-solid fa-circle-chevron-left"></i>
      </button>
      <div className="second_modal_div">
        <div className="container column">
          <h1>Edit Event</h1>
          <form
            className="container row"
            onSubmit={handleSubmit}
            style={{ textAlign: "center" }}
          >
            <div>
              <Calendar
                className={"card"}
                onChange={onChange}
                value={value}
                tileContent={tileContent}
                tileDisabled={tileDisabled}
              />
            </div>
            <div
              className="event_form"
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
              <select
                className="card"
                onChange={(e) => setVenue(e.target.value)}
              >
                <option>{event.Venue.name}</option>
                {allVenues.map((venue) => (
                  <option key={venue.id}>{venue.name}</option>
                ))}
              </select>
              <h4 style={{ margin: "0" }}>Type</h4>
              <select
                className="card"
                onChange={(e) => setType(e.target.value)}
              >
                <option>{event.Type.name}</option>
                {allTypes.map((type) => (
                  <option key={type.id}>{type.name}</option>
                ))}
              </select>
              <h4 style={{ margin: "0" }}>Name</h4>
              <input
                className="card"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder={event.name}
                name="title"
                required
              />
              <h4 style={{ margin: "0" }}>Capacity</h4>
              <select
                className="card"
                onChange={(e) => setCapacity(e.target.value)}
              >
                <option>{event.capacity}</option>
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
              <div className="card">
                <div>
                  <h4 style={{ margin: "0" }}>Time</h4>
                  <select
                    className="card"
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option>{time}</option>
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

              <button className="card collapse" type="submit">
                Confirm Changes
              </button>
              <DeleteModal
                setShowEventListModal={setShowEventListModal}
                setShowSingleEventModal={setShowSingleEventModal}
                setShowEditModal={setShowEditModal}
                className={"card"}
                eventId={event.id}
              />
            </div>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEventForm;
