import { useSelector } from "react-redux";
import { getEvents } from "../../store/eventReducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EditModal from "../EditForm/EditModal";
import LoginFormModal from "../LoginFormModal";
const SingleEvent = ({ id, showModal1, setShowModal1 }) => {
  const dispatch = useDispatch();
  const [currentRsvp, setCurrentRsvp] = useState();
  const currentUser = useSelector((state) => state.session.user);
  const eventsObj = useSelector((state) => state.event);
  const events = Object.values(eventsObj);
  // useEffect(() => {
  //   dispatch(getEvents());
  // }, [dispatch]);
  const singleEvent = events.find((event) => event.id === +id);
  let eventOwner = false;
  if (currentUser && currentUser.id === singleEvent.hostId) {
    eventOwner = true;
  }
  useEffect(() => {
    singleEvent.Rsvps.forEach((user) => {
      if (currentUser && currentUser.id === user.userId) {
        setCurrentRsvp(true);
      } else {
        setCurrentRsvp(false);
      }
    });
  }, []);

  return (
    <div className="singleArticle">
      <div>
        <h1>{singleEvent.name}</h1>
        <h2>{`hosted by ${singleEvent.User.username}`}</h2>
      </div>
      <div>
        <p>{singleEvent.Type.name}</p>
      </div>
      <div>
        <p>{new Date(singleEvent.date).toDateString()}</p>
        {currentRsvp && (
          <button className="card" onClick={setCurrentRsvp(false)}>
            Rsvp
          </button>
        )}
        {/* {!currentRsvp && (
          <button className="card" onClick={setCurrentRsvp(true)}>
            Rsvp
          </button>
        )} */}
      </div>

      <p>{singleEvent.capacity}</p>
      <p>at</p>
      <p>{`${singleEvent.Venue.name} ${singleEvent.Venue.address}`}</p>
      <div>
        <h3>Rsvp's</h3>
        <p>{singleEvent.Rsvps.length}</p>
        <ul>
          {currentUser &&
            singleEvent.Rsvps.map((user) => (
              <li key={user.id}>{user.User.username}</li>
            ))}
        </ul>
        {!currentUser && (
          <>
            <p>must be signed into to see rsvp's</p>
            <LoginFormModal></LoginFormModal>
          </>
        )}
      </div>
      <div className="button">
        {eventOwner && (
          <div>
            <EditModal
              showModal1={showModal1}
              setShowModal1={setShowModal1}
              singleEvent={singleEvent}
            />
          </div>
        )}
      </div>
      <button className="card" onClick={() => setShowModal1(false)}>
        Back
      </button>
    </div>
  );
};

export default SingleEvent;
