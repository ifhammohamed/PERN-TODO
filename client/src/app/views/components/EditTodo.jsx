import React, { Fragment, useState } from 'react'

function EditTodo({ todo }) {
    const [description, setDescription] = useState(todo.description)

    const onUpdateTodo = async () => {
        try {
            const body = { description };
            await fetch(`http://localhost:5050/todos/${todo.todo_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            window.location.reload();
        } catch (error) {
            console.log("can't");
            console.error(error.message);
        }
    };

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${todo.todo_id}`}
            >
                Edit
            </button>

            <div
                className="modal"
                id={`id${todo.todo_id}`}
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-dark">
                            <h4 className="modal-title ">Edit Todo</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                            >&times;</button>
                        </div>

                        <div className="modal-body">
                            <input
                                type='text'
                                className='form-control'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="modal-footer">
                            <button
                                type="submit"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={() => onUpdateTodo()}
                            >
                                Update
                            </button>

                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditTodo