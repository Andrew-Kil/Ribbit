const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getSingleUser,
  getAllPostsForAUser,
  getAllCommentsForAUser,
  updateUser,
  deleteUser,
  createUser
} = require("../db/queries/userQueries.js");

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.get("/:id/posts", getAllPostsForAUser);
router.get("/:id/comments", getAllCommentsForAUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/", createUser);

module.exports = router;
