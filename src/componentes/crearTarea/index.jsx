import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CrearTarea = ({ modal, toggle , save }) => {
    const [NombreTarea, setNombreTarea] = useState("");
     const [Descripcion, setDescrpcion] =useState("");

    const handleChange = (e) => {
        const {name , value} = e.target

        if (name === "NombreTarea") {
            setNombreTarea(value)
         }else {
            setDescrpcion(value)
         }

    }

    const handleSave = () => {
        let taskObj = {Name:NombreTarea, completed:false}
        save(taskObj)
    }
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Crear Tarea</ModalHeader>
      <ModalBody>
        <form>
            <div className="form-group">
                <label htmlFor="">Agregar Tarea</label>
                <input type="text" className="form-control" value={NombreTarea} onChange={handleChange} name="NombreTarea"/>

            </div>
          
          
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Crear
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
} 

export default CrearTarea;