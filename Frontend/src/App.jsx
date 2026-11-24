import React from 'react'
import {BrowserRouter as Router , Routes , Route, useNavigate} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import Home from './pages/Home'
import DeletePost from './pages/DeletePost'

const App = () => {
  const navigate = useNavigate()
  return (
  <div>


<Routes>
<Route path='/' element={<Home/>} />
<Route path='/create-post' element={<CreatePost/>} />
<Route path='/feed' element={<Feed/>} />
<Route path='/delete-post' element={<DeletePost/>} />

</Routes>

<div className=' h-[10em] w-full fixed bottom-0 left-0 flex justify-center '>

<button onClick={()=>{navigate("/")}}  className='bg-amber-400 text-2xl m-5 h-[2.5em] w-[5em] rounded-2xl text-white font-semibold '>Back</button>

</div>
</div> 

)}

export default App