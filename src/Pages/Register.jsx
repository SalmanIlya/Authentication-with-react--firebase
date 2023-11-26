import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Usefirebase } from '../Context/Firebase'
import { FcGoogle } from "react-icons/fc";
const Register = () => {
    const navigate=useNavigate()
const firebase=Usefirebase()
    const [Email, setEmail] = useState("")
    const [ ConfurmPassword, setConfurmPassword] = useState("")
    const [Password, setPassword] = useState("")
    const RegisterUser=()=>{
        if(!Email &&!Password &&!ConfurmPassword){}
        else{
            if(Password===ConfurmPassword){
                firebase.signupuser(Email,Password)
                navigate("/")
                console.log(Email,Password,ConfurmPassword);
            }else{
console.log("Password does not match");
            }
            
            
    }}
    const Sigupwithgoogle=()=>{
       console.log("w");
        if(firebase.isLogin){
            firebase.LoginWithGoogle()
            navigate("/")
        }
        
    }
    useEffect(()=>{
        if( firebase.isLogin ){
        navigate("/") }
    },[firebase,navigate])
  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Flowbite    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Create Your Account
              </h1>
              <div className="space-y-4 md:space-y-6" >
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="Confurm password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confurm Password</label>
                      <input onChange={(e)=>{setConfurmPassword(e.target.value)}} type="password" name="Confurm password" id="Confurm password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" onChange={(e)=>{setPassword(e.target.value)}} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  <button onClick={RegisterUser} className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className='text-center'>or</p>
                  <button  onClick={firebase.LoginWithGoogle}   className="w-full text-black border-2 border-blue-600  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex flex-row justify-center items-center "><p> Sign in With Google</p> <FcGoogle className='text-xl ' /></button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to={"/Login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Register