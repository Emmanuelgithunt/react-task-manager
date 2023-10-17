import React from 'react'
import {useState} from 'react'
import './Tasks.css'


const Tasks = () => {

  const initialState = {
    title: '',
    body: '',
  };

  const [todos, setTodos] = useState([]);

  const [EditMode, setEditMode] = useState(null)
  
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

  const handleDeleteTodo = (id)=>{
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos)
  }

  const EditBtn = (id)=>{
    setEditMode(id);
    const todoToEdit = todos.find((todo) => todo.id === id);
    setFormData({
      title: todoToEdit.text,
      body: todoToEdit.body,
    }); 
  }

  const handleUpdateTodo = () => {
    if (title.trim() === '' || body.trim() === '') {
      alert('Please, fill the input field');
    } else {
      const updateTodos = todos.map((todo) =>{
        if (todo.id === EditMode) {
          return{
            ...todo,
            text: title,
            body: body,
          }
        }
        return todo;
      });
      setTodos(updateTodos);
      setFormData(initialState);
      setEditMode(null);
    }
  }





  return (
    <div className='todo-container'>
      <h1>Todo List</h1>
      <div className='input-container'>

        <input type="text" placeholder='Title' 
        name="title" value={title} onChange={handleChange} />

        {EditMode ?(<button onClick={handleUpdateTodo}>Update</button>) : ( <button onClick={handleAdd}>Add</button>)}
      </div>

      <textarea 
      cols={42}
       rows={10} placeholder='Enter your text content'
       name='body' 
       value={body} onChange={handleChange}
      />

      <div className='todo-list'>
        {todos.map((todo) =>(
          <div key={todo.id}>
            <ul>
              <li>TITLE: {todo.text}</li>
              <li>BODY: {todo.body}</li>
              <div>
                <button className='span' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                <button className='span' onClick={() => EditBtn(todo.id)}>Edit</button>
              </div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks
