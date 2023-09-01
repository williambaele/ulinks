const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const linkSchema = new Schema(
  {
    socialMedia: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Link", linkSchema);
