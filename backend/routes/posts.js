const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getSinglePost,
  getSinglePostInfo,
  updatePost,
  deletePost,
  createPost
} = require("../db/queries/postQueries.js");

router.get("/", getAllPosts);
router.get("/:id", getSinglePostInfo);
router.get("/post/:id", getSinglePost);
// router.get("/create", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.post("/create", createPost);

module.exports = router;
