import { FC } from "react"

interface StatProps {
    number: number
    text: string
}

const Stat:FC<StatProps> = ({ number, text }) => {

    return (
        <li className='flex flex-col items-start md:items-center gap-y-4'>
            <p className='text-[64px] leading-[77px] text-green'>{number}+</p>
            <span className='text-2xl text-grey'>{text}</span>
        </li>
    )
}

export default Stat