const express = require("express");
const router = express.Router();

const {
  getAllSubribbits,
  getSingleSubribbit,
  updateSubribbit,
  deleteSubribbit,
  createSubribbit
} = require("../db/queries/subribbitQueries.js");

router.get("/", getAllSubribbits);
router.get("/:id", getSingleSubribbit);
router.put("/:id", updateSubribbit);
router.delete("/:id", deleteSubribbit);
router.post("/", createSubribbit);

module.exports = router;
