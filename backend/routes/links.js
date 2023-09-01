const express = require("express");
const {
  createLink,
  getLinks,
  getLink,
  deleteLink,
  updateLink,
} = require("../controllers/linkController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth only for create, update, and delete routes
router.post("/", requireAuth, createLink);
router.delete("/:id", requireAuth, deleteLink);
router.patch("/:id", requireAuth, updateLink);

// GET routes don't require auth
router.get("/", getLinks);
router.get("/:id", getLink);

module.exports = router;