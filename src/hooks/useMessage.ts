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