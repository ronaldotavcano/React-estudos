// Tipo props é igual ao react components no caso button
// e as propriedades que eu estou passando

type Props = React.ComponentProps<"button"> &{
    name: string

    // ? na frente significa que é opcional
    //onClick?: () => void
}
            // 2ª forma: props: Props 
            // <button> props.name </button>

                    // ...rest ele ta pegando todo o restante 
                    // das propriedades
export function Button({name, ...rest}: Props){
    return(
        <button {...rest}>{name} </button>
    )
}