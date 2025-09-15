type Props = {
    name: string

    // ? na frente significa que é opcional
    onClick?: () => void
}
            // 2ª forma: props: Props 
            // <button> props.name </button>
export function Button({name, onClick}: Props){
    return(
        <button onClick={onClick}>{name} </button>
    )
}