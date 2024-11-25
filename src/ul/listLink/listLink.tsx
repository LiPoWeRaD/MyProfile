import { FC } from "react";


interface ListLinkProps {
    pathLogo: string
    link: string
}

const ListLink:FC<ListLinkProps[]> = ( list ) => {
    return (
        <>
            {
            list.map( ( { pathLogo, link } ) => (
                <li key={pathLogo} className='w-16 h-16  '>
                    <a href={link} className="focus:outline-none hover:opacity-75 transition duration-300 ease-in focus-within:s:opacity-50 active:opacity-100 " target="_blank" rel="noreferrer"><img src={pathLogo} alt="" /></a>
                </li>
            ) )
        }
        </>
    )
} 

export default ListLink