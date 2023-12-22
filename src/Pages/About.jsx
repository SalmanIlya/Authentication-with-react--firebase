import React from 'react'

const About = () => {
  return (
    <div className=' max-h-auto min-h-screen bg-gray-200 py-10'>
 <div className="h-screen flex  2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse justify-between items-center px-20 bg-gray-200 py-10">
        <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2  w-full">
          <h1 className=" 2xl:text-6xl xl:text-6xl lg:text-6xl  
          md:text-4xl sm:text-3xl text-2xl
          font-extrabold">About us </h1>
          <p className="text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-xl mt-3 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores facere blanditiis ex. Quos impedit repellendus quasi libero saepe itaque delectus!</p>
        </div>
        <img src="./images/2.png" alt="" className="h-2/3 image-h" />
      </div> 
    </div>
  )
}

export default About