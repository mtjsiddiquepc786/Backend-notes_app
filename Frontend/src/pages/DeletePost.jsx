import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import { RiChatDeleteFill } from "@remixicon/react";

const DeletePost = () => {

const [posts, setPosts] = useState([{image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cEI7rb6i0oOGzZJbg6qDKYQPoW84G7jTnukHR7En4AP55VdJw7liWFvHdHMOyWHyp2Ix2gaG5z639_DwxhXCSk1B9OG4bPVUg4m39bY&s=10",caption :"image-caption"}])

useEffect(()=>{
axios.get('http://localhost:3000/posts')
  .then((res)=>{
    setPosts(res.data.posts)
    
  })
},[deletePost])

 function deletePost (_id){
 axios.delete(`http://localhost:3000/posts/${_id}`)
}



  return (
    <div>
      <div  className=' h-screen w-full flex justify-center m-[2vh] items-center flex-wrap  '>
{
posts.map((el,idx)=>{

return(
<div  key ={idx}>
<div className=' w-[15vw] h-[20vh] overflow-hidden  m-[2vh] rounded-2xl '>
<img  src={el.image} alt="" className='w-full h-full object-cover'/>
<RiChatDeleteFill onClick={()=>{deletePost(el._id)}
} className='absolute ' color='red' size={120}/>
</div>

</div>

)})}
</div>
</div>
)}
export default DeletePost