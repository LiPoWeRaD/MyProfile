import { FC } from "react"


interface Props {
    id: string
    name: string
    Ref: any
    type: string
    placeholder: string
    fullName: string
    textarea?: boolean
}

const InputForm:FC<Props> = ({id, name, Ref, type, placeholder, fullName, textarea = false}) => {

    return (
        <div className="mb-4">
          <label className="block mb-2 text-base  text-grey dark:text-grey" htmlFor={name}>{fullName}</label>
          {textarea ? 
            <textarea className='bg-transparent border-b border-white50 text-white w-3/4 focus:outline-none placeholder:text-white50' id={id} placeholder={placeholder} ref={Ref} /> : 
            <input className='bg-transparent border-b border-white50 text-white w-3/4 focus:outline-none placeholder:text-white50' type={type} id={id} required placeholder={placeholder} ref={Ref} />
        }
          
        </div>
    )
}

export default InputForm