import { useSelector } from "react-redux";
import { getEvents } from "../../store/eventReducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import EditModal from "../EditForm/EditModal";

const SingleEvent = ({ id, showModal1, setShowModal1 }) => {
  const dispatch = useDispatch();
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

  return (
    <div className="singleArticle">
      <h1>{singleEvent.name}</h1>
      <h2>{singleEvent.hostId}</h2>
      <p>{singleEvent.typeId}</p>
      <p>{new Date(singleEvent.date).toDateString()}</p>
      <p>{singleEvent.capacity}</p>
      <p>{singleEvent.venueId}</p>
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
