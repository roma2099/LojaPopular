import React from 'react'

const CarouselItem = ({ item }) => {
    return (
        <div className="flex flex-col md:flex-row-reverse justify-center items-center  h-[40rem] p-5 md:px-12  text-center bg-primary/20 rounded-3xl ">
            <div className='flex-1 flex justify-center   md:min-w-96  2xl:h-full'>
                <img className="  w-10/12 sm:w-7/12 md:w-full object-contain " src={item.imageUrl} alt={item.title} />
            </div>

            <div className="  md:text-left pb-6 md:pb-0 md:w-1/2  ">
                <h2 className="text-4xl font-bold lg:text-5xl xl:text-6xl 2xl:text-7xl ">{item.title}</h2>
                <p className=" mt-2 md:mt-4">{item.description}</p>
                <button className='bold px-4  py-2 mt-2 sm:mb-1  md:mt-4 rounded-full bg-primary text-background'>Shop Now</button>
            </div>
        </div>
    )
}

export default CarouselItem