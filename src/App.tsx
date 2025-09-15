import "./global.css" // sempre no topo pra nn resetar outras configs
import {Button} from "./components/button"
import "./styles.css"

// Todo componente tem que começar com letra maiuscula
export function App(){
  return (
    <div className="container">
      <Button name="Criar" onClick={() => alert("Criar")}/>
      <Button name="Editar" onClick={() => alert("Editar")}/>
      <Button name="Remover" onClick={() => alert("Remover")}/>
      
    </div>
  )
}