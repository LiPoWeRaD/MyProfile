import { FC } from "react"


interface IListSkills {
    pathLogo: string
}

const ListSkills:FC<IListSkills[]> = ( list ) => {

    return (
        <>
            {
            list.map( ( { pathLogo } ) => (
                <li key={pathLogo} className='w-20 h-20'>
                    <img src={pathLogo} alt="" />
                </li>
            ) )
        }
        </>
    )
}

export default ListSkills