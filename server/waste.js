const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const app = express();

//midleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", async (req, res) => {
  res.send("Hello World!");
});

/**
 * Get all todos
 */
app.get("/todos", async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todo");
    res.json(todos.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/**
 * Represents a newly created todo item.
 * @typedef {Object} NewTodo
 * @property {number} id - The unique identifier of the todo item.
 * @property {string} description - The description of the todo item.
 * @property {boolean} completed - Indicates whether the todo item is completed or not.
 * @property {Date} created_at - The timestamp when the todo item was created.
 */
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    // res.status(201).json(newTodo);

    res.status(201).json(newTodo.rows[0]);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

////?  Get a specific task by its ID
/**
 * Represents a todo item.
 * @typedef {Object} Todo
 * @property {number} todo_id - The ID of the todo item.
 * @property {string} description - The description of the todo item.
 * @property {boolean} completed - Indicates whether the todo item is completed or not.
 */

/**
 * Retrieves a todo item from the database.
 * @param {number} id - The ID of the todo item to retrieve.
 * @returns {Promise<Todo>} A promise that resolves to the retrieved todo item.
 */
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log("🚀 ~ app.get ~ id:", req.params);

    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
    console.log("🚀 ~ app.get ~ err:", err);
  }
});

/**
 * Updates a todo item in the database.
 *
 * @param {string} description - The new description for the todo item.
 * @param {number} id - The ID of the todo item to be updated.
 * @param {function} callback - The callback function to handle the result of the update operation.
 */
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id],
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Todo updated successfully!");
        }
      }
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // delete from db and return success message
    const deleteTodo = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1",
      [id],
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Todo deleted successfully!");
        }
      }
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//   // SELECT * FROM tasks WHERE user_id=$1 ORDER BY created_at DESC;
//   let query = `SELECT * FROM tasks WHERE user_id=$1 ORDER BY created_at DESC`;
//   if (!req.query.user_id) {//     res.status(400).json({ error: "Please provide user_id" });
//       return;
//   }
//   let userId = req.query.user_id;
//   pool.query("SELECT * FROM tasks", (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result.rows);
//     }
//   });

// app.get('/tasks/:task_
// app.put("/todo/:id", async (req, res) => {
//   const { id } = req.params;
//   const { task } = req.body;
//   pool.query(
//     "UPDATE tasks SET task = $1 WHERE id = $2",
//     [task, id],
//     (err, result) => {
//       if (err) {
//         res.send(err);
//       } else {
//         res.send("Task updated successfully!");
//       }
//     }
//   );
// });

// Delete a specific task by its ID
// app.delete("/todo/:id", async (req, res) => {
//   const { id } = req.params;
//   pool.query("DELETE FROM tasks WHERE id = $1", [id], (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send("Task deleted successfully!");
//     }
//   });
// });

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

```backend/
├── config/
│   └── db.js
├── controllers/
│   └── todoController.js
├── models/
│   └── Todo.js
├── routes/
│   └── todoRoutes.js
├── services/
│   └── todoService.js
├── app.js
└── index.js```;
