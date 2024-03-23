const pool = require("../config/db");

class Todo {
  //? Get all todos
  static getAll() {
    return pool.query("SELECT * FROM todo");
  }

  //? Represents a newly created todo item.
  static create(description) {
    return pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
  }

  //? Retrieves a todo item from the database.
  static getById(id) {
    return pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
  }

  //? Updates a todo item in the database.
  static update(id, description) {
    return pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [
      description,
      id,
    ]);
  }

  //? Delete a specific todo item from the database.
  static delete(id) {
    return pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
  }
}

module.exports = Todo;
