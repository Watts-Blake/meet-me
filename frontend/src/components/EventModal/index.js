import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleEvent = ({ events }) => {
  const { id } = useParams();
  const currentUser = useSelector((state) => state.session.user);
  const singleEvent = events.find((event) => event.id === +id);
  let eventOwner = false;
  if (currentUser && currentUser.id === singleEvent?.hostId) {
    eventOwner = true;
  }

  return (
    <div className="singleArticle">
      <h1>{singleEvent?.name}</h1>
      <p>{singleEvent?.typeId}</p>
      <p>{singleEvent?.date}</p>
      <p>{singleEvent?.capacity}</p>
      <h2>{singleEvent?.hostId}</h2>
      <p>{singleEvent?.venueId}</p>
      <div className="button">
        {eventOwner && (
          <div>
            <button>edit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleEvent;
