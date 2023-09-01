const Link = require("../models/linkModel");
const mongoose = require("mongoose");

// GET ALL LINKS
const getLinks = async (req, res) => {
  const links = await Link.find({}).sort({ createdAt: -1 });
  res.status(200).json(links);
};

// GET A SINGLE LINK
const getLink = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such link" });
  }

  const link = await Link.findById(id);

  if (!link) {
    return res.status(404).json({ error: "No such link" });
  }

  res.status(200).json(link);
};

// CREATE NEW LINK
const createLink = async (req, res) => {
  const { socialMedia, link, user_id } = req.body;
  let emptyFields = [];

  if (!socialMedia) {
    emptyFields.push("socialMedia");
  }
  if (!link) {
    emptyFields.push("link ");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Some information is missing: ", emptyFields });
  }

  const linkData = { socialMedia, link, user: user_id };
  // ADD DOC TO DB
  try {
    const link = await Link.create(linkData);
    res.status(200).json(link);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE A LINK
const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such task" });
  }

  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return res.status(400).json({ error: "No such task" });
  }

  res.status(200).json(task);
};

// UPDATE A TASK
const updateTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such task" });
  }

  const task = await Task.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!task) {
    return res.status(400).json({ error: "No such task" });
  }

  res.status(200).json(task);
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
