import axios from "axios";
import apiroutes from "../../apiroutes";
const API_URL = "http://localhost:5000/todos";

const getAllTodos = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};

const createNewTodo = async (todo) => {
  try {
    const res = await axios.post(API_URL, todo);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};

const getSingleTodo = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};

const updateTodo = async (id, todo) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, todo);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};

const deleteTodo = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }
};

const TodoService = {
  getAllTodos,
  createNewTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};

export default TodoService;
