import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EditModal from "../../EditForm/EditModal";
import LoginFormModal from "../../LoginFormModal";
import { postMember, deleteMember, getGroups } from "../../../store/groups";

const SingleGroup = ({ setShowSingleGroupModal, setShowGroupListModal }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.session.user);
  const group = useSelector((state) => state.group.currentGroup);
  const memberObj = useSelector((state) => state.group.groupMemberList);
  const memberList = Object.values(memberObj);

  const [currentMember, setCurrentMember] = useState();
  const [groupOwner, setGroupOwner] = useState();

  useEffect(() => {
    if (
      currentUser &&
      memberList.find((member) => member.userId === currentUser.id)
    ) {
      setCurrentMember(true);
    } else {
      setCurrentMember(false);
    }
    setGroupOwner(currentUser && currentUser.id === group.ownerId);
  }, [memberList, currentUser, group]);

  const handleJoin = (e) => {
    e.preventDefault();
    const member = {
      groupId: group.id,
      userId: currentUser.id,
    };
    dispatch(postMember(member));
    setCurrentMember(true);
  };

  const handleLeave = (e) => {
    e.preventDefault();
    const member = {
      groupId: group.id,
      userId: currentUser.id,
    };
    dispatch(deleteMember(member));
    setCurrentMember(false);
  };

  const handleBack = async (e) => {
    e.preventDefault();
    await dispatch(getGroups());
    setShowSingleGroupModal(false);
  };

  return (
    <div className="top_modal_div">
      <button className="card collapse back" onClick={handleBack}>
        <i className="fa-solid fa-circle-chevron-left"></i>
      </button>
      <div className="singleArticle second_modal_div">
        <div>
          <h1 style={{ textAlign: "center" }}>{group.name}</h1>
          <div
            className="container row gap"
            style={{ justifyContent: "center", textAlign: "center" }}
          >
            <h4>Owned by</h4>
            <p>{group.User.username}</p>
          </div>
        </div>
        <div className="container row gap">
          <div className="container row gap">
            {currentUser && currentMember && <h4>Joined</h4>}
            <p>{memberList.length} Members</p>

            {currentUser && currentMember && (
              <button className="card collapse_delete" onClick={handleLeave}>
                Leave
              </button>
            )}
            {!currentMember && currentUser && (
              <button className="card collapse" onClick={handleJoin}>
                Join
              </button>
            )}

            {!currentMember && !currentUser && (
              <LoginFormModal
                name={`Join`}
                title={`You must be Logged in to join a group`}
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
            {group.Type.name}
          </p>
        </div>
        <div>
          <div className="container row gap">
            <div className="button">
              {groupOwner && (
                <div>
                  <EditModal
                    setShowSingleGroupModal={setShowSingleGroupModal}
                    setShowEventGroupModal={setShowGroupListModal}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container row gap">
          <p>{group.details}</p>
        </div>
        <div className="container column">
          <div>
            <h3>Members's</h3>
            <ul>
              {currentUser &&
                memberList.map((user) => (
                  <li key={user.id}>{user.User.username}</li>
                ))}
            </ul>
          </div>
          {!currentUser && (
            <>
              <LoginFormModal
                name={`Member List`}
                title={`You must be Logged in to see the Member List`}
              ></LoginFormModal>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleGroup;
