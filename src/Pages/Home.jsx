import React,{useState,useEffect} from 'react'
import { Usefirebase } from '../Context/Firebase'
import Card from '../components/Card'
const Home = () => {
  const firebase=Usefirebase()
  const [Blogs, setBlogs] = useState([])

  useEffect(()=>{
   
    firebase.getAllBlogs().then((res)=>{
      setBlogs(res.docs)
    })
  },[firebase])
  if(Blogs==[]){
    return <div className='flex flex-col justify-center items-center '><h1>Loading...</h1></div>
  }
  return (
    <div>

<h1 className='text-center text-4xl font-bold m-5 '>All Blogs</h1>
    <div className=' min-h-screen max-h-auto flex flex-row justify-center items-center flex-wrap '>
  
     {
      Blogs.map((item)=>{
   const data=item.data()
console.log(item.id);
        return(
          <div key={data.date}  className=' flex flex-row justify-center items-center'>
         <Card data={data} id={item.id} />
          </div>
        )
      })
     }
    </div>
    </div>

  )
}

export default Home