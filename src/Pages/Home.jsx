import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [Blogs, setBlogs] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
   const getdata=async()=>{
    await axios.get("http://localhost:5000/api/post/").then((res)=>{
  setBlogs(res.data)
      navigate("/")
    }).catch((err)=>{
      console.log("error :",err);
    })
   }
   getdata()
  }, [navigate]);
  console.log("all blogs",Blogs);
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
   
        
          return (
            <div
              key={item._id}
              className=" flex flex-row justify-center items-center"
            >
              <Card data={item} id={item._id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
