import React, { useEffect, useState } from "react";
import CrearTarea from "../crearTarea/index";
import Tareas from "../tarea/index"; 
import Contador from "../contador";


const Agregartask = () => {
  const [modal, setModal] = useState(false);
  const [ListaTask, setListaTask] = useState([]);

 

  useEffect (() => {
      let arr = localStorage.getItem("ListaTask")

      if (arr) {
          let obj = JSON.parse(arr)
          setListaTask(obj)
      }
  },[])

  const deleteTask = (index) => {
    let templist = ListaTask;
    templist.splice(index, 1);
  localStorage.setItem("ListaTask", JSON.stringify(templist))
    setListaTask(templist);
    window.location.reload();
  };
  const Check = (index) => {
    const taskCopy = [...ListaTask];
    taskCopy[index].completed = !taskCopy[index].completed;
    setListaTask(taskCopy);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const GuardarTask = (taskObj) => {
  
    setListaTask([...ListaTask, taskObj]);
    setModal(false);
    
  };
  
  return (
    <>
      <div className="header text-center">
        <h3>To Do List</h3>
        <button
          className="btn btn-success mt-2 "
          onClick={() => setModal(true)} 
          
        >
          AGREGAR
        </button>
      </div>
      <div className="contenedor-tarea">
        {ListaTask &&
          ListaTask.map((obj, index) => (
            <Tareas
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              check={Check}
            />
          ))}
      </div>
      <CrearTarea toggle={toggle} modal={modal} save={GuardarTask} /> 
      <Contador/>
    </>
  );
};

export default Agregartask;
