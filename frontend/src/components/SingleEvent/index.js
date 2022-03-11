import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EditModal from "../EditForm/EditModal";
import LoginFormModal from "../LoginFormModal";
import { getRsvps, postRsvp, deleteRsvp } from "../../store/rsvp";
import { getCurrentEvent } from "../../store/setCurrentEvent";
const hoursTransform = (hours) => {
  if (hours <= 12) {
    return `${hours}:00 AM`;
  } else if (hours === 0) {
    return `1:00 AM`;
  } else {
    return `${hours - 12}:00 PM`;
  }
};

const SingleEvent = ({ setShowSingleEventModal, setShowEventListModal }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.session.user);
  const event = useSelector((state) => state.currentEvent);
  const rsvpObj = useSelector((state) => state.rsvp);
  const rsvpList = Object.values(rsvpObj);

  const [currentRsvp, setCurrentRsvp] = useState();
  const [eventOwner, setEventOwner] = useState();

  useEffect(() => {
    if (
      currentUser &&
      rsvpList.find((rsvp) => rsvp.userId === currentUser.id)
    ) {
      setCurrentRsvp(true);
    } else {
      setCurrentRsvp(false);
    }
    setEventOwner(currentUser && currentUser.id === event.hostId);
  }, [rsvpList, currentUser, event]);

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
    <div className="top_modal_div">
      <button
        className="card collapse back"
        onClick={() => setShowSingleEventModal(false)}
      >
        <i className="fa-solid fa-circle-chevron-left"></i>
      </button>
      <div className="singleArticle second_modal_div">
        <div>
          <h1 style={{ textAlign: "center" }}>{event.name}</h1>
          <div
            className="container row gap"
            style={{ justifyContent: "center", textAlign: "center" }}
          >
            <h4>by</h4>
            <p>{event.User.username}</p>
          </div>
        </div>
        <div className="container row gap">
          <div className="container row gap">
            <h4>Attending</h4>
            <p>
              {rsvpList.length}/{event.capacity}
            </p>

            {currentUser && currentRsvp && (
              <button className="card collapse_delete" onClick={handleUnRsvp}>
                RSVP
              </button>
            )}
            {!currentRsvp && currentUser && (
              <button className="card collapse" onClick={handleRsvp}>
                RSVP
              </button>
            )}

            {!currentRsvp && !currentUser && (
              <LoginFormModal
                name={`RSVP`}
                title={`You must be Logged in to RSVP to an event`}
              ></LoginFormModal>
            )}
          </div>
          <p
            style={{
              border: "1px solid grey",
              borderRadius: "15px",
              textAlign: "center",
              width: "50%",
              padding: "2px",
            }}
          >
            {event.Type.name}
          </p>
        </div>
        <div>
          <div className="container row gap">
            {new Date(event.date).toDateString()} <h4>at</h4>
            {hoursTransform(new Date(event.date).getHours())}
            <div className="button">
              {eventOwner && (
                <div>
                  <EditModal
                    setShowSingleEventModal={setShowSingleEventModal}
                    setShowEventListModal={setShowEventListModal}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container row gap">
          <p>{event.Venue.name}</p>
          <p>{event.Venue.address}</p>
        </div>
        <div className="container column">
          <p>
            {event.Venue.city}, {event.Venue.state}
          </p>
          <div>
            <h3>Rsvp's</h3>
            <ul>
              {currentUser &&
                rsvpList.map((user) => (
                  <li key={user.id}>{user.User.username}</li>
                ))}
            </ul>
          </div>
          {!currentUser && (
            <>
              <LoginFormModal
                name={`Rsvp List`}
                title={`You must be Logged in to see the RSVP List`}
              ></LoginFormModal>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
