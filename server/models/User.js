const { Schema, model } = require("mongoose");
const dishSchema = require("")



const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },

    favoriteDish: [dishSchema],
  },

  {
    toJSON: {
      virtuals: true,
    },
  },
);

const User = model("User", userSchema);

module.exports = User;