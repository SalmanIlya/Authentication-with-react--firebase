import React, { useState } from "react";
import { Usefirebase } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const CreateBlog = () => {
  const firebase = Usefirebase();
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [image, setimage] = useState("");
  const navigator = useNavigate();
  const SendData = () => {
    if (!firebase.isLogin) {
      toast.info(" please Login First")
      navigator("/Login");
    } else {
      const tit = Title === "";
      const des = Description === "";
      const img = image === "";
    
      if (tit) {
       
        toast.error("title is required")
      } else if (des) {
       
        toast.error("description is required")
      } else if (img) {
        toast.error("image is required")
      } else {
        firebase.CreateBlogspage(Title, Description, image).then(() => {
          toast.success("blog is created")
          navigator("/");
          setTitle("");
          setDescription("");
          setimage("");
        });
      }
    }
  };

  return (
    <div className=" bg-gray-200">
      <section className="bg-gray-200 dark:bg-gray-900">
        <ToastContainer/>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Logo
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    value={Title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    type="text"
                    name="Title"
                    id="Title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Title"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="Description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    value={Description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    rows={5}
                    type="text"
                    name="Description"
                    id="Description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Description"
                    required=""
                  />
                </div>

                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      onChange={(e) => {
                        setimage(e.target.files[0]);
                      }}
                      className="hidden"
                      required="true"
                    />
                  </label>
                </div>

                <button
                  onClick={SendData}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateBlog;
