import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ data, id }) => {
 
  

  return (
    <Link
      to={`/Blog/${id}`}
      className="hover:scale-110 ease-in-out transition-all shadow-lg hover:shadow-2xl md:m-5 sm:m-5 mx-5 mb-5 max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 h-96 w-80"
    >
      <img className="rounded-t-lg h-52 w-full" src={data.img} alt={data.title} />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laborum...</p>
      </div>
    </Link>
  );
};

export default Card;
