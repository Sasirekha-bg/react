import React, { useState } from 'react'

import './App.css'

export default function App(){
    let [todoInput,updateInput] = useState('')
    let [todolist,updateTodos] = useState(
        [
            {
                id:1,
                task:'Learn react'
            },
            {
                id:2,
                task:'Responsive'
            }
        ]
    )
    let nextId =3;

    function addNewTodo() {
        if(todoInput == ''){
            alert('add some task')
        }
        else{
           let  newTodos = [
                ...todolist,
                {
                    id:nextId++,
                    task:todoInput
                }
            ]
            updateTodos(newTodos);
            updateInput("");
        }
    }

    function deleteTodo(id){
       let updatedTodos = todolist.filter(
            (todo)=>{
               return todo.id != id;

            }
        )
        updateTodos(updatedTodos);
    }

    function editTask(changetask){
        updateInput(changetask.task);
        deleteTodo(changetask.id);
         
    }


    return (
        <div>
            <h3 className='text-center mt-5'>TODO App Using React</h3>
            <div className="input-group mt-5 ">
                <input className="form-control" onChange={(e)=>{
                    let task = e.target.value;
                    updateInput(task);
                }} type="text" value={todoInput}></input>
                <button className="btn btn-primary" onClick={()=>{
                    addNewTodo()
                }}>ADD</button>
            </div>
            <ul className="list-group mt-4">
                {
                    todolist.map(
                        (todo)=>{
                            return(
                                <li className="list-group-item"><p>{todo.task}</p>
                                <div>
                                <button className='btn' onClick={()=>{
                                    editTask(todo)
                                }}>☐</button>
                <button className='btn' onClick={()=>{
                    deleteTodo(todo.id)
                }}>❌</button>
                                </div>
                </li>
                            )
                        }
                    )
                }
                
            </ul>
        </div>
    );
}