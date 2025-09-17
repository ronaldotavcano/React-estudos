import "./global.css" // sempre no topo pra nn resetar outras configs

import {Button} from "./components/button"
import {useMessage} from "./hooks/useMessage"

import styles from "./app.module.css"


// Todo componente tem que começar com letra maiuscula
export function App(){
  const { show }= useMessage({age: 20, name: "Ronaldo,"})

  return (
    <div className={styles.container}>
      
      <Button name="Adicionar" onClick={() => show("seja bem-vindo")}/>
      <span>0</span>
      <Button name="Remover" />
      
    </div>
  )
}