import profile from '../../assets/profile.jpeg'
import Stat from '../../ul/stat/stat'

const Header = () => {

    return (
        <div className='flex flex-col container mx-auto'>
            <h2 className='mb-10 text-green '>Hello</h2>
            <h3 className='mb-10 text-2xl leading-[64px] md:text-[64px] text-white'>I'm Jonathan, UX/UI Designer and no-code Developer</h3>
            <p className='text-grey text-base md:text-xl w-3/4 mb-40'>I craft elegant solutions to complex problems, and I gives me pleasure. I'm living in Berlin with my loving wife and cute daughter.</p>
            <ul className='flex gap-x-24'>
                {Stat({ number: 1, text: 'Years Experience' })}
                {Stat({ number: 5, text: 'Completed Project' })}
            </ul>
        </div>

        
    )
}

export default Header