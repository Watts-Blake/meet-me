import { csrfFetch } from "./csrf";
//--------------------------------------------load groups-----------------------
const LOAD_GROUPS = "groups/loadGroups";
export const loadGroups = (groups) => {
  return { type: LOAD_GROUPS, groups };
};

export const getGroups = () => async (dispatch) => {
  const res = await fetch("/api/groups");
  const groups = await res.json();
  dispatch(loadGroups(groups));
};
//--------------------------------------------add groups-----------------------

const ADD_GROUP = "groups/addGroup";
export const addGroup = (group) => ({
  type: ADD_GROUP,
  group,
});

export const postGroup = (data) => async (dispatch) => {
  const res = await csrfFetch("/api/groups", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const group = await res.json();

  dispatch(addGroup(group));
};
//--------------------------------------------update group-----------------------
const UPDATE_GROUP = "groups/updateGroup";
export const updateGroup = (group) => ({
  type: UPDATE_GROUP,
  group,
});
export const putGroup = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/groups/${data.groupId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const updatedGroup = await res.json();
  dispatch(updateGroup(updatedGroup));
};

//--------------------------------------------delete group-----------------------
const DELETE_GROUP = "groups/deleteGroup";
export const removeGroup = (groupId) => ({
  type: DELETE_GROUP,
  groupId,
});
export const deleteGroup = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/groups/${data}`, {
    method: "DELETE",
  });

  const groupId = await res.json();

  dispatch(removeGroup(groupId));
};

//----------------------------------------------current group actions
const UPDATE_CURRENT_GROUP = "groups/updateCurrentGroup";

export const updateCurrentGroup = (group) => {
  return { type: UPDATE_CURRENT_GROUP, group };
};

export const updateCurrentGroupState = (group) => async (dispatch) => {
  dispatch(updateCurrentGroup(group));
};

const LOAD_CURRENT_GROUP = "groups/getCurrentGroup";
export const loadCurrentGroup = (group) => {
  return { type: LOAD_CURRENT_GROUP, group };
};

export const getCurrentGroup = (groupId) => async (dispatch) => {
  const res = await csrfFetch(`/api/groups/${groupId}`, {
    method: "GET",
  });
  const group = await res.json();
  dispatch(loadCurrentGroup(group));
};
//------------------------------------load members
const LOAD_MEMBERS = "groups/loadMembers";
export const loadMembers = (memberList) => {
  return { type: LOAD_MEMBERS, memberList };
};

export const getMembers = (groupId) => async (dispatch) => {
  const res = await fetch(`/api/groups/${groupId}/list`);
  const memberList = await res.json();
  dispatch(loadMembers(memberList));
};
//--------------------------------------------add members-----------------------

const ADD_MEMBER = "groups/addMember";
export const addMember = (member) => ({
  type: ADD_MEMBER,
  member,
});

export const postMember = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/groups/${data.groupId}/list`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const member = await res.json();

  dispatch(addMember(member));
};

//--------------------------------------------delete members-----------------------
const DELETE_MEMBER = "groups/deleteMember";
export const removeMember = (memberId) => ({
  type: DELETE_MEMBER,
  memberId,
});
export const deleteMember = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/groups/${data.eventId}/${data.userId}`, {
    method: "DELETE",
    body: JSON.stringify(data),
  });

  const member = await res.json();

  dispatch(removeMember(member.id));
};
//---------------------------------------------reducer----------------------------

const groupReducer = (
  state = { groups: {}, currentGroup: {}, groupMemberList: {} },
  action
) => {
  let newState = { ...state };

  switch (action.type) {
    case LOAD_GROUPS: {
      action.groups.forEach((group) => {
        return (newState.groups[group.id] = group);
      });
      return newState;
    }
    case ADD_GROUP: {
      newState.groups[action.group.id] = { ...action.group };

      return newState;
    }
    case UPDATE_GROUP: {
      newState.groups[action.group.id] = action.group;
      return newState;
    }
    case DELETE_GROUP: {
      delete newState.groups[action.groupId];
      return newState;
    }
    case LOAD_CURRENT_GROUP: {
      newState.currentGroup = action.group;
      return newState;
    }
    case UPDATE_CURRENT_GROUP: {
      newState.currentGroup[action.group.id] = action.group;
      return newState;
    }
    case LOAD_MEMBERS: {
        action.memberList.forEach(member => {
            return (newState.groupMemberList[member.id] = member)
        })
        return newState
    }
    case ADD_MEMBER: {
        newState.groupMemberList[action.member.id] = {...action.member}
        return newState
    }
    case DELETE_MEMBER: {
        delete newState.groupMemberList[action.memberId]
        return newState
    }
    default:
      return state;
  }
};

export default groupReducer;
