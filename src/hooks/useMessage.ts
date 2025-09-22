import { useEffect } from "react"

type Props = {
    name: string,
    age: number,
}

export function useMessage( {name}: Props){
  function show(message: string){
    console.log(name,message)
  }

  return { show }
}

useEffect(() => {
  console.log("Eu sou o useEffect do useMessage")
}, [])