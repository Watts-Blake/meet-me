const { User, Event, Rsvp, Venue, Type } = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth } = require("../../utils/auth");
const { Op } = require("sequelize");
// const Sequelize = require("sequelize");
//------------------------------------------------------middle-ware------------------------------------------
const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const router = express.Router();

// const validateEventCreate = [
//   check("email")
//     .exists({ checkFalsy: true })
//     .isEmail()
//     .withMessage("Please provide a valid email."),
//   check("username")
//     .exists({ checkFalsy: true })
//     .isLength({ min: 4 })
//     .withMessage("Please provide a username with at least 4 characters."),
//   check("username").not().isEmail().withMessage("Username cannot be an email."),
//   check("password")
//     .exists({ checkFalsy: true })
//     .isLength({ min: 6 })
//     .withMessage("Password must be 6 characters or more."),
//   handleValidationErrors,
// ];

//------------------------------------------------------middle-ware------------------------------------------
//
//
//
//------------------------------------------------------routes------------------------------------------
router
  .route("/")
  .get(
    //get events
    asyncHandler(async (req, res) => {
      const events = await Event.findAll({
        include: [
          { model: User },
          { model: Type },
          { model: Venue },
          { model: Rsvp, include: [{ model: User }] },
        ],
      });

      return res.json(events);
    })
  )
  .post(
    //create events
    requireAuth,
    asyncHandler(async (req, res) => {
      const updatedEvent = await Event.create(req.body);
      const event = await Event.findByPk(updatedEvent.id, {
        include: [
          { model: User },
          { model: Type },
          { model: Venue },
          { model: Rsvp, include: [{ model: User }] },
        ],
      });
      return res.json(event);
    })
  );
router
  .route("/:id")
  .get(
    //get specific event
    asyncHandler(async (req, res) => {
      const eventId = req.params.id * 1;
      const event = await Event.findByPk(eventId, {
        include: [
          { model: User },
          { model: Type },
          { model: Venue },
          { model: Rsvp, include: [{ model: User }] },
        ],
      });
      return res.json(event);
    })
  )
  .put(
    //update
    requireAuth,
    asyncHandler(async (req, res) => {
      const event = await Event.findByPk(req.params.id);
      event.update(req.body);
      const updatedEvent = await Event.findByPk(event.id, {
        include: [
          { model: User },
          { model: Type },
          { model: Venue },
          { model: Rsvp, include: [{ model: User }] },
        ],
      });
      return res.json(updatedEvent);
    })
  )
  .delete(
    //delete
    requireAuth,
    asyncHandler(async (req, res) => {
      const eventId = req.params.id * 1;
      console.log(req.params.id * 1);
      const event = await Event.findByPk(eventId);

      // if (req.session.auth.userId !== event.hostId) {
      //   const err = new Error("You are not authorized");
      //   return next(err);
      // }

      await event.destroy();
      return res.json(eventId);
      // } else {
      //   const err = new Error("Event Does Not Exist!");
      //   return next(err);
      // }
    })
  );
//---------------------------------------------rsvp's
router
  .route("/:id/rsvp")
  .get(
    // get rsvp list

    asyncHandler(async (req, res) => {
      const eventId = req.params.id * 1;
      const rsvpList = await Rsvp.findAll({
        where: { eventId },
        include: {
          model: User,
        },
      });
      return res.json(rsvpList);
    })
  )
  .post(
    //rsvp to an event
    requireAuth,
    asyncHandler(async (req, res) => {
      const eventId = req.params.id * 1;
      const userId = req.body.userId;
      console.log("hereeeeeeeeeeeeeeeeeeeeeeeee", userId);
      const rsvpFind = await Rsvp.create({ eventId, userId });
      const rsvp = await Rsvp.findByPk(rsvpFind.id, { include: User });
      return res.json(rsvp);
    })
  );

router.route("/:id/:userId").delete(
  //delete your rsvp to an event
  requireAuth,
  asyncHandler(async (req, res) => {
    const eventId = req.params.id * 1;
    const userId = req.body.userId;
    const rsvp = await Rsvp.findOne({ where: { eventId, userId } });
    await rsvp.destroy();
    return res.json(rsvp);
  })
);
//------------------------------------------------------days events

router.route("/day/:id").get(
  asyncHandler(async (req, res) => {
    const dateUrl = req.params.id;
    const dateArr = dateUrl.split("%");
    const dateStr = dateArr.join(" ");
    const dateS = new Date(dateStr).toDateString();
    console.log(
      "hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      dateS
    );
    const events = await Event.findAll({
      where: {
        date: {
          [Op.like]: `%${dateS}%`,
        },
      },
      include: [
        { model: User },
        { model: Type },
        { model: Venue },
        { model: Rsvp, include: [{ model: User }] },
      ],
    });
    if (events) {
      return res.json(events);
    } else {
      res.json(null);
    }
  })
);

//------------------------------------------------------routes------------------------------------------
//
//
//
//------------------------------------------------------exports------------------------------------------
module.exports = router;
