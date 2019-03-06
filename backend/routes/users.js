const express = require("express");
const router = express.Router();
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");

const {
  getAllUsers,
  getSingleUser,
  getAllPostsForAUser,
  getAllCommentsForAUser,
  updateUser,
  deleteUser,
  createUser,
  isLoggedIn,
  loginUser,
  logoutUser
} = require("../db/queries/userQueries.js");

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);

// router.get("/:id", getAllPostsForAUser);
// router.get("/:id", getAllCommentsForAUser);
// router.get("/:id/posts", getAllPostsForAUser);
// router.get("/:id/comments", getAllCommentsForAUser);

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/new", createUser);
router.post("/login", passport.authenticate("local", {}), loginUser);
router.get("/isLoggedIn", isLoggedIn);
router.post("/logout", loginRequired, logoutUser);

module.exports = router;
