import {Button} from "./components/button"

// Todo componente tem que começar com letra maiuscula
export function App(){
  return (
    <div>
      <Button name="Criar" onClick={() => alert("Criar")}/>
      <Button name="Editar"/>
      <Button name="Remover"/>
      
    </div>
  )
}