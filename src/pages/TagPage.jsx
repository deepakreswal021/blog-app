import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div className='font-bold text-lg mt-[100px]'>
        <button onClick={()=> navigation(-1) 
        }
        className="border-2 border-gray-300 py-1 px-4 rounded-md">
            Back
        </button>
        <h2> Blogs Tagged <span>#{tag}</span></h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default TagPage
