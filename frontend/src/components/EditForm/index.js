import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { putEvent } from "../../store/eventReducer";
import { getVenues } from "../../store/venues";
import { getTypes } from "../../store/types";
import DeleteModal from "../DeleteModal/DeleteModal";

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
  singleEvent,
  showModal1,
  setShowModal1,
  showModal2,
  setShowModal2,
}) => {
  const sessionUser = useSelector((state) => state.session.user);
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVenues());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  const venuesObj = useSelector((state) => state.venue.entries);
  const allVenues = Object.values(venuesObj);

  const eventVenue = allVenues.find((ven) => ven.id === singleEvent.venueId);
  console.log("singleEvent", singleEvent);
  console.log("eventVenue", eventVenue);
  const typesObj = useSelector((state) => state.type.entries);
  const allTypes = Object.values(typesObj);
  const eventType = allTypes.find((typ) => typ.id === singleEvent.typeId);

  const hours = new Date(singleEvent.date).getHours();
  const currentEventTime = hoursTransform(hours);
  const [venueId, setVenueId] = useState(eventVenue.id);
  const [typeId, setTypeId] = useState(singleEvent.typeId);
  const [name, setName] = useState(singleEvent.name);
  const [time, setTime] = useState(singleEvent.date);
  const [capacity, setCapacity] = useState(singleEvent.capacity);

  const reset = () => {
    setVenueId("");
    setTypeId("");
    setName("");
    setTime(new Date().toString());
    setCapacity(5);
  };
  const eventId = singleEvent.id;
  const hostId = sessionUser.id;
  const handleSubmit = (e) => {
    e.preventDefault();
    setVenueId(allVenues.find((ven) => ven.name === name).id);
    setTypeId(allTypes.find((typ) => typ.name === singleEvent.typeId));
    const date = `${value.toDateString()} ${time}`;
    const updatedEvent = {
      eventId,
      hostId,
      venueId,
      typeId,
      name,
      date: date.toString(),
      capacity,
    };

    dispatch(putEvent(updatedEvent));
    setShowModal2(false);
    reset();
  };

  return (
    <div className="container">
      <h1>Edit Event</h1>
      <form onSubmit={handleSubmit}>
        <div></div>
        <select className="card" onChange={(e) => setVenueId(e.target.value)}>
          <option>{eventVenue.name}</option>
          {allVenues.map((venue) => (
            <option key={venue.id}>{venue.name}</option>
          ))}
        </select>
        <select className="card" onChange={(e) => setTypeId(e.target.value)}>
          <option>{eventType.name}</option>
          {allTypes.map((type) => (
            <option key={type.id}>{type.name}</option>
          ))}
        </select>
        <input
          className="card"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder={singleEvent.name}
          name="title"
        />
        <select className="card" onChange={(e) => setCapacity(e.target.value)}>
          <option>{singleEvent.capacity}</option>
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
        <div>
          <Calendar className={"card"} onChange={onChange} value={value} />
        </div>
        <div className="card">
          <div>
            <select className="card" onChange={(e) => setTime(e.target.value)}>
              <option>{currentEventTime}</option>
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

        <button className={"card"} type="submit">
          Confirm Changes
        </button>
      </form>
      <button className="card" onClick={() => setShowModal2(false)}>
        Cancel
      </button>
      <DeleteModal
        showModal1={showModal1}
        setShowModal1={setShowModal1}
        showModal2={showModal2}
        setShowModal2={setShowModal2}
        className={"card"}
        eventId={singleEvent.id}
      />
    </div>
  );
};

export default EditEventForm;
