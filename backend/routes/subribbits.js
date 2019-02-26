const express = require("express");
const router = express.Router();

const {
  getAllSubribbits,
  getSingleSubribbit,
  getAllPostsForASubribbit,
  updateSubribbit,
  deleteSubribbit,
  createSubribbit
} = require("../db/queries/subribbitQueries.js");

router.get("/", getAllSubribbits);
router.get("/:id", getSingleSubribbit);
router.get("/posts/:id", getAllPostsForASubribbit);
router.put("/:id", updateSubribbit);
router.delete("/:id", deleteSubribbit);
router.post("/", createSubribbit);

module.exports = router;
