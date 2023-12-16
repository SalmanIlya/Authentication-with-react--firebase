import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Usefirebase } from "../Context/Firebase";
const SingleBlog = () => {
  const firebase = Usefirebase();
  const params = useParams();
  const { id } = params;
  const [data, setdata] = useState(null);
  const [url, seturl] = useState("");

  useEffect(() => {
    try {
      firebase.getsingleblog(id).then((res) => {
        setdata(res.data());
      });
    } catch (err) {
    
    }
  }, []);
  useEffect(() => {
    if (data) {
      const imgpath = data.img;
      firebase.downloadimg(imgpath).then((res) => {
        seturl(res);
      });
    }
  
  }, [data]);
 

  if (data === null) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        {" "}
        <h1>Loading...</h1>{" "}
      </div>
    );
  }

  return (
    <div className="flex flex-col  items-center max-h-auto min-h-screen  p-20">
      <img src={url} alt="" className="lg:h-1/2 lg:w-1/2 rounded-2xl " />
      <div>
        <h1 className="text-3xl font-bold text-gray-800 h-auto">
          {data.title}
        </h1>
        <p className="text-gray-600 text-justify">{data.description}</p>
        <p className="text-gray-600">{data.date}</p>
        <p></p>
      </div>
    </div>
  );
};

export default SingleBlog;
