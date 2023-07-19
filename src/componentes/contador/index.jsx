import React from 'react' 
import { useState } from 'react';




 const Contador =() => { 
 const [Contador, setContador] = useState(0) 

 const sumar = () => {
    setContador(Contador + 1)
 }
  return (
    <div>
    <h3>Contador</h3>  
     
    <button onClick={sumar}>Sumar </button>
     <button></button>

    </div>
  )
}

export default Contador;