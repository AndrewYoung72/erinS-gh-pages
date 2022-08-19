const { Schema, Types } = require("mongoose");

const dishSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

module.exports = dishSchema;