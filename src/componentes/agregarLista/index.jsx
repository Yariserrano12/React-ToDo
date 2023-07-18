import styles from "../agregarLista/";

function AgregarLista() {
  return (
    <>
      <div className="encabezado text-center">
        <h3>To Do List</h3>
        <button className="btn btn-primary"> AGREGAR</button>
      </div>
      <div className="task-container"></div>
    </>
  );
}

export default AgregarLista;
