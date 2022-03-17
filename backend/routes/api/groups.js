const {
  User,
  Event,
  Rsvp,
  Venue,
  Type,
  Group,
  GroupMember,
} = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Op } = require("sequelize");
// const Sequelize = require("sequelize");
//------------------------------------------------------middle-ware------------------------------------------
const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const router = express.Router();

//-----------------------------------------------------routes----------------------------------
router
  .route("/")
  .get(
    //get events
    asyncHandler(async (req, res) => {
      const groups = await Group.findAll({
        include: [
          { model: User },
          { model: Type },
          { model: GroupMember, include: [{ model: User }] },
        ],
      });

      return res.json(groups);
    })
  )
  .post(
    //create groups
    requireAuth,
    asyncHandler(async (req, res) => {
      const newGroup = await Group.create(req.body);
      const group = await Group.findByPk(newGroup.id, {
        include: [
          { model: User },
          { model: Type },
          { model: GroupMember, include: [{ model: User }] },
        ],
      });
      return res.json(group);
    })
  );

router
  .route("/:id")
  .get(
    //get specific group
    asyncHandler(async (req, res) => {
      const groupId = req.params.id * 1;
      const group = await Group.findByPk(groupId, {
        include: [
          { model: User },
          { model: Type },
          { model: GroupMember, include: [{ model: User }] },
        ],
      });
      return res.json(group);
    })
  )
  .put(
    //update
    requireAuth,
    asyncHandler(async (req, res) => {
      const group = await Group.findByPk(req.params.id);
      group.update(req.body);
      const updatedGroup = await Event.findByPk(group.id, {
        include: [
          { model: User },
          { model: Type },
          { model: GroupMember, include: [{ model: User }] },
        ],
      });
      return res.json(updatedGroup);
    })
  )
  .delete(
    //delete
    requireAuth,
    asyncHandler(async (req, res) => {
      const groupId = req.params.id * 1;

      const group = await Group.findByPk(groupId);

      await group.destroy();
      return res.json(groupId);
    })
  );

//-----------------------------------------------get members list - join or leave group

router
  .route("/:id/list")
  .get(
    // get groupmember list

    asyncHandler(async (req, res) => {
      const groupId = req.params.id * 1;
      const groupList = await GroupMember.findAll({
        where: { groupId },
        include: {
          model: User,
        },
      });
      return res.json(groupList);
    })
  )
  .post(
    //join a group
    requireAuth,
    asyncHandler(async (req, res) => {
      const groupId = req.params.id * 1;
      const userId = req.body.userId;

      const joinGroup = await GroupMember.create({ groupId, userId });
      const joinedUser = await GroupMember.findByPk(joinGroup.id, {
        include: User,
      });
      return res.json(joinedUser);
    })
  );

router.route("/:id/:userId").delete(
  //leave a group
  requireAuth,
  asyncHandler(async (req, res) => {
    const groupId = req.params.id * 1;
    const userId = req.body.userId;
    const groupUser = await GroupMember.findOne({ where: { groupId, userId } });
    await groupUser.destroy();
    return res.json(groupUser);
  })
);
//-----------------------------------------------------routes----------------------------------
module.exports = router;
