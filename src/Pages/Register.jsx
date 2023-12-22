import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Usefirebase } from "../Context/Firebase";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
const Register = () => {
  const navigate = useNavigate();
  const firebase = Usefirebase();
  const [Email, setEmail] = useState("");
  const [ConfurmPassword, setConfurmPassword] = useState("");
  const [Password, setPassword] = useState("");
  const RegisterUser = () => {
    if (!Email) {
      toast.error("all fields are required")
    } else
     if(!Password ){

      toast.error("all fields are required")
    
    }else if(!ConfurmPassword){
      toast.error("all fields are required")

    }else{
      if(Password.length<8){
toast.error("password must be 8 characters")
      }else{

        if (Password === ConfurmPassword) {
          firebase.signupuser(Email, Password);
          navigate("/Login");
       toast.success("Account Create Successfully")
        } else {
          toast.error("Password does not match")
        
        }
      }
     
    }
  };

  useEffect(() => {
    if (firebase.isLogin) {
      navigate("/");
    }
  }, [firebase, navigate]);
  return (
    <div>
      <section className="bg-gray-200 dark:bg-gray-900 max-h-auto min-h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
         <ToastContainer />

         <h1 className="text-2xl font-bold my-5">Logo</h1>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create Your Account
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="Confurm password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confurm Password
                  </label>
                  <input
                    onChange={(e) => {
                      setConfurmPassword(e.target.value);
                    }}
                    type="password"
                    name="Confurm password"
                    id="Confurm password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  onClick={RegisterUser}
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
               
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/Login"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
