import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);


  return (
    <div>
      <Header/>
      <div className='font-bold text-lg mt-[100px]'>
        <button onClick={()=> navigation(-1)}>
            &gt; Back
        </button>
        <h2> Blogs on <span>{category}</span></h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
