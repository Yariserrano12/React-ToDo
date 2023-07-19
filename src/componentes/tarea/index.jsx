import React from 'react';

const tareas = ({taskObj , index, deleteTask, check}) => { 
    const handleDelete = () => {
     deleteTask(index) 
    } 

    const handlecheck = () =>{
      check(index) 
   } 
   const getCheckColor = (isCompleted) => {

     return isCompleted?"#5DC250": "#888"
   }
    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": "chartreuse"}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color":"#F2FAF1", "border-radius": "20px"}}>{taskObj.Name}</span>
               

                <div style={{"position": "rows", "right" : "20px", "buttom" : "20px"}}>
                <i class="fa-solid fa-circle-check" style={{"color" : getCheckColor(taskObj.completed)}} onClick={handlecheck}></i>
                    <i class="fas fa-trash-alt mr-3"  style = {{"color" :"#5DC250"}} onClick={handleDelete}></i>
                </div>
           </div>
        </div>
    );
};

export default tareas;


