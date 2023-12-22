import React, { useState, useEffect } from "react";
import { Usefirebase } from "../Context/Firebase";
import Card from "../components/Card";
const Home = () => {
  const firebase = Usefirebase();
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    firebase.getAllBlogs().then((res) => {
      setBlogs(res.docs);
    });
  }, [firebase]);
  if (Blogs == []) {
    return (
      <div className="flex flex-col justify-center items-center ">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="bg-gray-200 pb-20">
      <div className="h-screen flex  2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse justify-between items-center px-20 bg-gray-200 py-10">
        <div className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2  w-full">
          <h1 className=" 2xl:text-6xl xl:text-6xl lg:text-6xl  
          md:text-4xl sm:text-3xl text-2xl
          font-extrabold">Lorem ipsum dolor sit amet consectetur </h1>
          <p className="text-sm mt-3 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores facere blanditiis ex. Quos impedit repellendus quasi libero saepe itaque delectus!</p>
        </div>
        <img src="./images/1.png" alt="" className="h-2/3 image-h" />
      </div> 
     
      <h1 className="text-center text-4xl font-extrabold  my-20">All Blogs</h1>
      <div className=" min-h-screen max-h-auto flex flex-row justify-center items-center flex-wrap ">
        {Blogs.map((item) => {
          const data = item.data();
        
          return (
            <div
              key={data.date}
              className=" flex flex-row justify-center items-center"
            >
              <Card data={data} id={item.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
