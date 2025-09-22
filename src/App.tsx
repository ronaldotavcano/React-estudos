import "./global.css" // sempre no topo pra nn resetar outras configs
import { useState, useEffect } from "react"
import {Button} from "./components/button"
//import {useMessage} from "./hooks/useMessage"

import styles from "./app.module.css"


// Todo componente tem que começar com letra maiuscula
export function App(){
  //[] -> 1º é o estado e em 2º a func que atualiza o estado 
  const [count, setCount] = useState(0)
  

  //const { show }= useMessage({age: 20, name: "Ronaldo,"})

  function handleAdd(){
    //setCount(count + 1)
      setCount((prevstate) => prevstate + 1)
  }

  function handleRemove(){
    //setCount(count - 1)
    if (count > 0){
      setCount((prevstate) => prevstate - 1)
    }
  }

  // useEffect tem q ficar perto do return
  // 1º Função que executa a lógica, 2º as dependências
  useEffect(() => {
    if(count > 0){
      console.log("O valor mudou para: " + count)
    }
  }, [count])

  return (
    <div className={styles.container}>
      
      <Button name="Adicionar" onClick={handleAdd}></Button>
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove}/>
      
    </div>
  )
}