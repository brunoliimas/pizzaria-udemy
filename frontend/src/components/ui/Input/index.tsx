import { InputHTMLAttributes, TextareaHTMLAttributes } from "react"



interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }



export function Input({ ...rest }: InputProps) {
    return (
        <input
            {...rest}
            className="mb-4 h-10 rounded-sm bg-dark-900 text-white p-4 border border-gray-100 placeholder:text-white placeholder:opacity-50"
        />
    )
}

export function TextArea({ ...rest }: TextAreaProps) {
    return (
        <textarea
            {...rest}
            className="mb-4 h-10 rounded-sm bg-dark-900 text-white p-4 border border-gray-100 placeholder:text-white placeholder:opacity-50"
        ></textarea>
    )
}