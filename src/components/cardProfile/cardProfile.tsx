import profile from '../../assets/profile.jpeg'
import ListLink from '../../ul/listLink/listLink';
import vk from '../../assets/logoProfilePage/vk.svg'
import git from '../../assets/logoProfilePage/git.svg'

const CardProfile = () => {
    return (
        <div className='flex flex-col '>
            <img className='flex mt-16  w-[360px] h-[360px] rounded-[40px]' src={profile} alt="My profile" />
            <ul className='flex gap-x-10'>
                {ListLink([
                    { pathLogo: vk, link: 'https://vk.com/lipowerad' },
                    { pathLogo: git, link: 'https://github.com/LiPoWeRaD' },
                ])}
            </ul>
        </div>
    );
}

export default CardProfile