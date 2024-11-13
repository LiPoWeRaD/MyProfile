import { FC } from "react"


// border-green

interface CardServiceProps {
    name: string
    count: number
    borderColor?: string
}

const CardService:FC<CardServiceProps> = ({ name, count, borderColor = "green" }) => {

    return (
        <li className={`flex flex-col items-center justify-center w-[240px] h-[120px] rounded-[40px] border-2 border-${borderColor} border-solid`}>
            <p className="text-2xl text-white">{name}</p>
            <p className="text-base text-grey">{count} Проектов</p>
        </li>
    )    
}


export default CardService