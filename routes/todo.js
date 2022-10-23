const router = require("express").Router();
const Todo = require("../models/Todo");

// get all todos
router.get("/", async (req, res) => {
  const data = await Todo.find();
  res.json({ data: data });
});

// create a todo
router.post("/", async (req, res) => {
  const body = req.body;
  const newTodo = new Todo({
    checked: false,
    value: body.value,
  });

  const todo = await newTodo.save();

  res.json({ todo: todo });
});

// edit todo
router.post("/edit", async (req, res) => {
  const body = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(
      { _id: body._id },
      { checked: body.checked, value: body.value },
      { new: true }
    );

    res.json({ todo: todo });
  } catch (err) {
    res.json({ message: "Error", reason: err });
  }
});

// delete todo
router.delete("/", async (req, res) => {
  const body = req.body;

  try {
    const todo = await Todo.findByIdAndDelete({ _id: body._id });

    res.json({ todo: todo });
  } catch (err) {
    res.json({ message: "Error", reason: err });
  }
});

module.exports = router;
