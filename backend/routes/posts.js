var express = require("express");
var router = express.Router();

const {
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  createPost
} = require("../db/queries/postQueries.js");

router.get("/", getAllPosts);
router.get("/:id", getSinglePost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.post("/", createPost);

module.exports = router;
