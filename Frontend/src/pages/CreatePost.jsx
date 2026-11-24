import React, { useState } from 'react'
import axios from "axios"

const CreatePost = () => {
  const [caption, setCaption] = useState("")

const onFormSubmit=(e)=>{
  e.preventDefault()
  const formData =  
  
  axios.post('http://localhost:3000/create-post',formData)
  .then((res)=>{
    alert("post successfull")
    e.target.reset()
  })
}


  return (
    <div className='bg-amber-100  absolute top-1/2 left-1/2 -translate-x-1/2   -translate-y-1/2   h-[60vh] w-[80vw]   flex flex-col  justify-center  gap-5   '>


<form onSubmit={(e)=>{onFormSubmit(e)}}>

<div className="papa flex relative ">
<input type="file" id="myfile" name='image' style={{display:"none"}} className=''/>

<label htmlFor="myfile"   className='w-screen h-[8vh] mx-5 '>

<h1 className=" bg-amber-700 h-[90%] w-full  text-2xl text-center  p-3 rounded-2xl " >Choose file {"=>"} 

</h1>
</label>



</div>
<div className="papa flex ">
<input type='text' name='caption' placeholder=' Enter caption . . .' className='border-2 h-[8vh] w-full bg-amber-300 mx-5'  value={caption} onChange={(e)=>{setCaption(e.target.value)}} />

</div>
<button className='bg-amber-500 my-4  rounded-2xl h-[15%] w-[20vw] absolute left-[30vw] '>Submit</button>
</form>
</div>
)
}

export default CreatePost