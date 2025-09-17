import "./global.css" // sempre no topo pra nn resetar outras configs
import {Button} from "./components/button"

import styles from "./app.module.css"

// Todo componente tem que começar com letra maiuscula
export function App(){
  return (
    <div className={styles.container}>
      
      <Button name="Adicionar" />
      <span>0</span>
      <Button name="Remover" />
      
    </div>
  )
}