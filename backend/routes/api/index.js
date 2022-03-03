const {
  setTokenCookie,
  restoreUser,
  requireAuth,
} = require("../../utils/auth.js");
const { User } = require("../../db/models");
const asyncHandler = require("express-async-handler");
//---------------------------------------------------------------------routers imports---------------------------------------------------------------

const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
//---------------------------------------------------------------------routers imports---------------------------------------------------------------
//
//
//
//---------------------------------------------------------------------routers-----------------------------------------------------------------------
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
//---------------------------------------------------------------------routers-----------------------------------------------------------------------
//
//
//
//-------------------------------------------------------------------test routes---------------------------------------------------------------------
router.post("/test", function (req, res) {
  res.json({ requestBody: req.body });
});

// GET /api/set-token-cookie
router.get(
  "/set-token-cookie",
  asyncHandler(async (_req, res) => {
    const user = await User.findOne({
      where: {
        username: "Demo-User",
      },
    });
    setTokenCookie(res, user);
    return res.json({ user });
  })
);

// GET /api/restore-user
router.get("/restore-user", restoreUser, (req, res) => {
  return res.json(req.user);
});

// GET /api/require-auth
router.get("/require-auth", requireAuth, (req, res) => {
  return res.json(req.user);
});
//-------------------------------------------------------------------test routes---------------------------------------------------------------

module.exports = router;
