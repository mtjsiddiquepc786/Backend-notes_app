import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
return (

<div className='bg-amber-100  absolute top-1/2 left-1/2 -translate-x-1/2   -translate-y-1/2   h-[60vh] w-[80vw]   flex flex-col  justify-center  gap-5  '>

<div onClick={()=>{navigate("/create-post")}}className=" bg-amber-300 h-[10em] m-3 text-white flex  items-center justify-center cursor-pointer active:scale-90 hover:scale-110 rounded-2xl">
<h1 className= ' bg-amber-900 text-center text-[3em] h-[2.9em] w-[5.5em] font-bold  p-3 '>UPLOAD</h1> </div>

<div onClick={()=>{navigate("/feed")}} className=" bg-amber-500 h-[10em] m-3 text-white flex items-center justify-center cursor-pointer active:scale-90 hover:scale-110 rounded-2xl"><h1 className= ' bg-amber-700 text-center text-[3em] h-[2.9em] w-[5.5em] font-bold  p-3 '>FEEDS</h1></div>

<div onClick={()=>{navigate('/delete-post')}} className=" bg-amber-500 h-[10em] m-3 text-white flex items-center justify-center cursor-pointer active:scale-90 hover:scale-110 rounded-2xl"><h1 className= ' bg-amber-700 text-center text-[3em] h-[2.9em] w-[5.5em] font-bold  p-3 '>Del-posts</h1></div>

</div>

)
}

export default Home