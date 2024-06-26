import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { AppContext } from '../context/AppContext';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
  
    const baseUrl = "https://codehelp-apis.vercel.app/api/";

    const [blog,setBlog]=useState(null);
    const[relatedblogs,setRelatedBlogs]= useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const {loading,setLoading}= useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${baseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is: ");
        console.log(url);
        try{
            const res = await fetch(url);
            const data =await  res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs)

            console.log("printing ");
            console.log(data.blog);
            console.log(data.relatedblogs);
        }
        catch(error){
            console.log("error aaya in blog id wali call ");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId) fetchRelatedBlogs();
    },[location.pathname])

  return (
    <div>
      <Header/>
      <div className="w-11/12 max-w-2xl mx-auto">
      <div className='font-bold text-lg mt-[100px]'>
        <button onClick={() => navigate(-1)}>
            Back
        </button>
      </div>
      {
        loading ? <p className="text-center font-bold text-3xl">Loading</p> :
        blog ? 
        (<div>
            <BlogDetails post={blog}/>
            <h2 className='font-bold text-lg mt-[30px]'>Related Blogs</h2>
            {
                relatedblogs.map((post)=>(
                    <div key={post.id}>
                        <BlogDetails post={post}/>
                    </div>
                ))
            }
        </div>) : (<div><p>No Blog Found</p></div>) 
      }
      </div>
    </div>
  )
}

export default BlogPage
