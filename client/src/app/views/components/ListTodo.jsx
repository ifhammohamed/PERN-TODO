import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo';
function ListTodo() {

    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) => {
        try {
            const res = await fetch(`http://localhost:5050/todos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log("🚀 ~ deleteTodo ~ res:", res)
            // window.location.reload();
            setTodos(todos.filter(todos => todos.todo_id !== id))

            if (!res.ok) throw new Error('Error in deleting data');
            else return res.json();

        } catch (error) {
            console.error(error.message);
        }
    }

    // Get todos data when component mounts for the first time.
    const loadTodo = async () => {
        try {
            const res = await fetch('http://localhost:5050/todos');
            const data = await res.json();
            console.log("🚀 ~ loadTodo ~ data:", data)
            setTodos(data);
        } catch (error) {
            console.error(error.message);
        }

        //////!Method 2//////
        // fetch('http://localhost:5050/todos')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(err => console.log(err));
    };

    useEffect(() => {
        loadTodo();
    }, []);



    return (
        <Fragment>
            <h1 className='text-center mt-5'>List Todos</h1>
            <div className="container mt-5 text-center">
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Descriptoin</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {/* map the data */}
                    {todos.map((todo) => (
                        <tbody key={todo.todo_id}>
                            <tr>
                                <td>{todo.description}</td>
                                <td>
                                    <EditTodo todo={todo} />
                                </td>
                                <td>
                                    <button type="button" className='btn btn-danger' onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>

            </div>
        </Fragment>
    )
}

export default ListTodo