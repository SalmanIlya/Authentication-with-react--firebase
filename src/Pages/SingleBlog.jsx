import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const SingleBlog = () => {
  const params = useParams();
  const { id } = params;
  const [data, setdata] = useState({});
const navigate=useNavigate()
  useEffect(() => {
      const getdata=async()=>{
        await axios.get(`http://localhost:5000/api/post/${id}`).then((res)=>{
      setdata(res.data)
          // navigate("/")
        }).catch((err)=>{
          console.log("error :",err);
        })
       }
   
    getdata()
  }, [id]);
  
 

  if (data.title===undefined) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        {" "}
        <h1>Loading...</h1>{" "}
      </div>
    );
  }
  
  return (
    <div className="flex flex-col  items-center max-h-auto min-h-screen  p-20 bg-gray-200 ">
      <img src={data.img} alt="" className="lg:h-1/2 lg:w-1/2 rounded-2xl " />
      <div>
        <h1 className="text-3xl font-bold text-gray-800 h-auto">
          {data.title}
        </h1>
        <p className="text-gray-600 text-justify">{data.desc}</p>
        {/* <p className="text-gray-600">{data.date}</p> */}
        <p></p>
      </div>
    </div>
  );
};

export default SingleBlog;
