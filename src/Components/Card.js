import React, { useState,useEffect } from 'react';
import '../App.css'


export default function Card({taskObj,index,deleteTask,taskList,taskName,description}){


  const colors = [
    {
        primaryColor : "#5D93E1",
        secondaryColor : "#ECF3FC"
    },
    {
        primaryColor : "#F9D288",
        secondaryColor : "#FEFAF1"
    },
    {
        primaryColor : "#5DC250",
        secondaryColor : "#F2FAF1"
    },
    {
        primaryColor : "#F48687",
        secondaryColor : "#FDF1F1"
    },
    {
        primaryColor : "#B964F7",
        secondaryColor : "#F3F0FD"
    }
]

const handleDelete=()=>{
  deleteTask(index);
}
    return(
        <>
        <div className="card">
            <div className="card-top" style={{"backgroundColor":colors[index%5].primaryColor}}></div>
  <div className="card-body" >
    <span className="card-title" style={{"backgroundColor" : colors[index%5].secondaryColor}}>{taskObj.Name}</span>
    
    <p className="card-text mt-2">{taskObj.Description}</p>
    <div style={{"position":"absolute","right":"20px",'bottom':"20px"}}>
      <i className="fas fa-trash-alt " style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick={handleDelete}></i>
    </div>
   </div>
   
</div>


        </>
    )
}