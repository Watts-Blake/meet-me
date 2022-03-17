import SingleGroupModal from "./SingleGroup/SingleGroupModal";

const GroupDetails = ({ group }) => {
  // useEffect(() => {
  //   dispatch(getCurrentEvent(event.id));
  // }, [dispatch]);

  return (
    <li className="list">
      <SingleGroupModal group={group} />
    </li>
  );
};

export default GroupDetails;
