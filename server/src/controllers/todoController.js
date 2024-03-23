const Todo = require("../models/Todo");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.getAll();
    res.json(todos.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await Todo.create(description);
    res.status(201).json(newTodo);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.getById(id);
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await Todo.update(id, description);
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.delete(id);
    res.send("Todo deleted successfully!");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
