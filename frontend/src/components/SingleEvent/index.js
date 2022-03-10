import { useSelector } from "react-redux";
import { getEvents } from "../../store/eventReducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EditModal from "../EditForm/EditModal";
import LoginFormModal from "../LoginFormModal";
import { getRsvps, postRsvp, deleteRsvp } from "../../store/rsvp";
const SingleEvent = ({
  id,
  showModal1,
  setShowModal1,
  showEventListModal,
  setShowEventListModal,
}) => {
  const dispatch = useDispatch();
  const [currentRsvp, setCurrentRsvp] = useState();

  const event = useSelector((state) => state.currentEvent);

  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getRsvps(event.id));
  }, [dispatch, event, currentUser]);

  const rsvpObj = useSelector((state) => state.rsvp);
  const rsvpList = Object.values(rsvpObj);

  let eventOwner = false;
  if (currentUser && currentUser.id === event.hostId) {
    eventOwner = true;
  }

  const handleRsvp = (e) => {
    e.preventDefault();
    const rsvp = {
      eventId: event.id,
      userId: currentUser.id,
    };
    dispatch(postRsvp(rsvp));
    setCurrentRsvp(true);
  };

  const handleUnRsvp = (e) => {
    e.preventDefault();
    const rsvp = {
      eventId: event.id,
      userId: currentUser.id,
    };
    dispatch(deleteRsvp(rsvp));
    setCurrentRsvp(false);
  };

  return (
    <div className="singleArticle">
      <div>
        <h1>{event.name}</h1>
        <h2>{`hosted by ${event.User.username}`}</h2>
      </div>
      <div>
        <p>{event.Type.name}</p>
      </div>
      <div>
        <p>{new Date(event.date).toDateString()}</p>
        {currentRsvp && (
          <button className="card" onClick={handleUnRsvp}>
            UnRsvp
          </button>
        )}
        {!currentRsvp && (
          <button className="card" onClick={handleRsvp}>
            Rsvp
          </button>
        )}
      </div>
      <p>{event.capacity}</p>
      <p>at</p>
      <p>{`${event.Venue.name} ${event.Venue.address}`}</p>
      <div>
        <h3>Rsvp's</h3>
        <p>{rsvpList.length}</p>
        <ul>
          {currentUser &&
            rsvpList.map((user) => <li key={user.id}>{user.User.username}</li>)}
        </ul>
        {!currentUser && (
          <>
            <LoginFormModal
              name={`Rsvp List`}
              title={`You must be Logged in to see the RSVP List`}
            ></LoginFormModal>
          </>
        )}
      </div>
      <div className="button">
        {eventOwner && (
          <div>
            <EditModal
              showModal1={showModal1}
              setShowModal1={setShowModal1}
              singleEvent={event}
              event={event}
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
