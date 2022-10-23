const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  checked: {
    type: Boolean,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todo", TodoSchema);
