const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  createPost
} = require("../db/queries/postQueries.js");

router.get("/", getAllPosts);
router.get("/:id", getSinglePost);
router.get("/create", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.post("/", createPost);

module.exports = router;
