import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getEvents } from "../../store/eventReducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import EditModal from "../EditForm/EditModal";

const SingleEvent = ({ id }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const eventsObj = useSelector((state) => state.event);
  const events = Object.values(eventsObj);
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
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
            <EditModal singleEvent={singleEvent} />
            <button>delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleEvent;
