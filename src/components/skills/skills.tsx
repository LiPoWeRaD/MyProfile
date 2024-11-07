import ListSkills from '../../ul/listSkills/listSkills'
import reactlogo from '../../assets/logoSkills/react.svg'
import figmalogo from '../../assets/logoSkills/figma.svg'
import csharp from '../../assets/logoSkills/csharp.svg'
import ts from '../../assets/logoSkills/ts.svg'
import tailwind from '../../assets/logoSkills/tailwind.svg'

const Skills = () => {

    return (
        <div className=''>
            <h2 className='mb-5 text-green'>Skills</h2>
            <h3 className='mb-5 text-[40px] text-white'>My skills and knowledge</h3>
            <ul className="flex flex-wrap gap-x-[60px] gap-y-5">
                {ListSkills([
                    { pathLogo: reactlogo }, 
                    { pathLogo: figmalogo }, 
                    { pathLogo: csharp }, 
                    { pathLogo: ts },
                    { pathLogo: tailwind }
                ])}
            </ul>
        </div>
    )
}

export default Skills