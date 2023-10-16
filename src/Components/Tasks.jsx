import React from 'react'
import {useState} from 'react'
import './Tasks.css'


const Tasks = () => {

  const initialState = {
    title: '',
    body: '',
  };

  const [todos, setTodos] = useState([]);
  
  const [formData, setFormData] = useState(initialState);
  const { title, body } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleAdd = () => {
    if (title.trim() === '' || body.trim() === '') {
      alert('Please fill in the input fields');
    } else {
      const newTodo = {
        id: Date.now(),
        text: title,
        body: body,
      }

      setTodos([...todos, newTodo]);
      setFormData(initialState);
      console.log([...todos, newTodo]);
    }
  }


  return (
    <div className='todo-container'>
      <h1>Todo List</h1>
      <div className='input-container'>

        <input type="text" placeholder='Title' 
        name="title" value={title} onChange={handleChange} />

        <button onClick={handleAdd}>Add</button>
      </div>

      <textarea 
      cols={42}
       rows={10} placeholder='Enter your text content'
       name='body' 
       value={body} onChange={handleChange}
      />

      <div className='todo-list'>
        <div>
            <ul>
                <li>TITLE:</li>
                <li>BODY:</li>
                <div>
                    <button className='span'>Delete</button>
                    <button className='span'>Edit</button>
                </div>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Tasks
