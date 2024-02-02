import React,{useState,useEffect} from "react";
import Card from "./Card";
import '../App.css'



export default function Todolist() {
  const[taskName,setTaskName]=useState(' ');
  const[description,setDescription]=useState('');
  const[taskList,setTaskList]=useState([]);

  const deleteTask=(index)=>{
    let tempList=taskList;
    tempList.splice(index,1);
    localStorage.setItem("taskList",JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }


  useEffect (()=>{
    let arr=localStorage.getItem("taskList");
    if(arr){
      let obj=JSON.parse(arr);
      setTaskList(obj)
    }
  },[])
  

  const handleChange=(e)=>{
    const{value,name}=e.target;
    if(name==='taskName'){
      setTaskName(value)
    }
    else{
      setDescription(value)
    }
  }

  const save=(taskObj)=>{
    let tempList=taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList",JSON.stringify(tempList));
    setTaskList(tempList);
  }
  const handleAdd=(e)=>{
    // e.preventDefault()
    const taskObj ={}
    taskObj["Name"]=taskName;
    taskObj["Description"]=description;
    save(taskObj);
    window.location.reload();
    // setDescription(' ')
    // setTaskName(' ')
    
  }
  const handleDelete=()=>{
    setTaskName(' ')
    setDescription(' ')
  }
  
  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        
       
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add tasks
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Create task</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <div className="form-group">
        <label className="float-start">Task name</label>
      <input className="form-control" type="text" name="taskName" value={taskName} onChange={handleChange}/>
      </div>
      <div className="mb-2">
      <label className="float-start mt-2">Description</label>
      <textarea rows="5" className="form-control" name="description" value={description} onChange={handleChange}>enter</textarea>
      </div>

      {/* <div className="form-group">
      
      </div> */}

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleDelete} >Delete</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleAdd}>Add</button>
      </div>
    </div>
  </div>
</div>
        
    </div>

    <div className="task-container">
      {taskList && taskList.map((obj,index)=><Card taskObj={obj} index={index} deleteTask={deleteTask} taskList={taskList} taskName={taskName} description={description} />)}
      
    </div>
    

    </>
  );
}
