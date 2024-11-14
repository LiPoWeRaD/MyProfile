import Stat from '../../ul/stat/stat'

const Header = () => {

    return (
        <div className='flex flex-col container mx-auto'>
            <h2 className='mb-10 text-green '>Привет</h2>
            <h3 className='mb-10 text-2xl leading-[64px] md:text-[64px] text-white'>Меня зовут Егор, я - Frontend Developer</h3>
            <p className='text-grey text-base md:text-xl w-3/4 mb-40'>
            Я создаю сайты с использованием React и TypeScript. 
            При этом осваиваю новые технологии и инструменты. 
            Мне нравится создавать удобные и красивые интерфейсы для пользователей.
            </p>
            <ul className='flex gap-x-24'>
                {Stat({ number: 1, text: 'Лет практики' })}
                {Stat({ number: 5, text: 'Выполненных проектов' })}
            </ul>
        </div>

        
    )
}

export default Header