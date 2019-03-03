const express = require("express");
const router = express.Router();

const {
  getAllCommentsForPost,
  getSingleComment,
  updateComment,
  deleteComment,
  createComment
} = require("../db/queries/commentQueries.js");

router.get("/:id", getAllCommentsForPost);
// router.get("/:id", getSingleComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);
router.post("/", createComment);

module.exports = router;
