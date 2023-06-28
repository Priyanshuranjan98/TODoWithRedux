import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {addTodo,deleteTodo,removeTodo} from '../action/index';
import '../App.css'

const Todo=()=> {
    const[inputData,setInputData]=useState('');
    const dispatch=useDispatch();
    const list=useSelector((state)=>state.todoReducers.list)
    console.log(list)
    // ()=>dispatch(addTodo(inputData),setInputData(''));
    const handleSubmit = ()=>{
        dispatch(addTodo(inputData));
        setInputData('');
    }
  return (
    <>
    <div>
    <h1>TO DO APP!!!</h1>
    <br/>
    </div>
    <div>
        <input value={inputData} onChange={(event)=>{
            setInputData(event.target.value)    
        }} type="text"/>
        <button onClick={handleSubmit}>+</button>
    </div>
    {list?.map((data)=>{
       return(
        <div className='todoList' key={data.id}>
        <ul>{data.data}</ul>
        <span>
        <button onClick={()=>dispatch(deleteTodo(data.id))}>-</button>
         
        </span>
    </div>
       )
    })}
    <div>
       
    </div>

    </>
  )
}

export default Todo