interface CardProps {
    name: string
    hobby: string
    age: number
}

export const Card = ({name, hobby, age} : CardProps) => {
    return <div>
        <p>Nome: {name}</p>
        <p>Hobby: {hobby}</p>
        <p>Idade: {age}</p>
    </div>
}