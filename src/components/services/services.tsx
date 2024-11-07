import CardService from "../../ul/cardService/cardService"


const Services = () => {

    return (
        <div>
            <h2 className='mb-5 text-green'>Services</h2>
            <h3 className='mb-10 text-[40px] text-white'>My expertise and services</h3>
            <ul className="flex gap-x-24">
                {CardService({ name: "Web Development", count: 5 })}
            </ul>
        </div>
    )
}

export default Services