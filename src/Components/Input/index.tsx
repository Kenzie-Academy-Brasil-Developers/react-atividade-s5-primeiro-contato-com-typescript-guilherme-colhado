import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string
    label?: string
}

export const Input = ({placeholder, label, ...rest}: InputProps) => {
    return <div>
        <div>{label && `${label}`} <input type="text" placeholder={placeholder} {...rest}/></div>
    </div>
}