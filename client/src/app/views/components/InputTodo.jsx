import React, { Fragment } from 'react'
import { useState } from 'react'

const InputTodo = () => {
    const [description, setDescription] = useState('');

    const onSubmitForm = async (e) => {
        e.preventDefault();
        console.log(description);

        try {
            const body = { description };

            if (!description) {
                console.log("🚀 ~ onSubmitForm ~ Error: enter valid todo");
                throw new Error("Please enter a task");
            } else {
                const res = await fetch('http://localhost:5050/todos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });

                if (!res.ok) {
                    throw new Error('Error in posting data');
                }
            }
            console.log("🚀 ~ onSubmitForm ~ body:", body)



            window.location.reload();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Fragment>
            <h1 className='text-center mt-5'>Input Todo</h1>
            <form onSubmit={onSubmitForm}
                className='d-flex -inline justify-content-center m-2'
            >
                <input type="text" name="todo" className='form-control' placeholder='Add Todo' style={{ width: '50%' }} value={description} onChange={e => setDescription(e.target.value)} />
                <button type="submit" className='btn btn-success ml-3' >Add Todo</button>
            </form>
        </Fragment>
    )
}

export default InputTodo