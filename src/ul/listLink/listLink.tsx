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
                <li key={pathLogo} className='w-16 h-16'>
                    <a href={link} target="_blank" rel="noreferrer"><img src={pathLogo} alt="" /></a>
                </li>
            ) )
        }
        </>
    )
} 

export default ListLink