import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// 8. Replace import of action creator with thunk creator
import { postEvent } from "../../store/eventReducer";
import { getVenues } from "../../store/venues";

const EventForm = () => {
  const dispatch = useDispatch();
  const venuesObj = useSelector((state) => state.venue.entries);
  const venues = Object.values(venuesObj);
  useEffect(() => {
    dispatch(getVenues());
  }, [dispatch]);
  const [venueId, setVenueId] = useState("");
  const [typeId, setTypeId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [capacity, setCapacity] = useState("");
  // const mapableVenues = Object.values(venues).map((venue) => venue);
  // console.log(Object.values(venues).map(({ venue }) => venue));
  console.log(venueId);
  const reset = () => {
    setVenueId("");
    setTypeId("");
    setName("");
    setDate("");
    setCapacity("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      venueId,
      typeId,
      name,
      date,
      capacity,
    };

    dispatch(postEvent(newEvent));
    reset();
  };

  return (
    <div className="container">
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setVenueId(e.target.value)}>
          {venues.map((venue) => (
            <option key={venue.id}>{venue.name}</option>
          ))}
        </select>
        <input
          type="text"
          onChange={(e) => setVenueId(e.target.value)}
          // value={title}
          placeholder="Title"
          name="title"
        />
        <input
          type="text"
          onChange={(e) => setTypeId(e.target.value)}
          placeholder="Image URL"
          name="imageUrl"
        />
        <textarea
          // value={body}
          // onChange={(e) => setBody(e.target.value)}
          name="body"
          placeholder="Add your entry"
          rows="10"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
