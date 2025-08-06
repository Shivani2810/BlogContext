import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'


export const AppContext  = createContext();

// 2.provider

export default function AppContextProvider({children})
{
//    data
  const[loading,setLoading]=useState(false);
  const[posts,setPosts]=useState([]);
  const[page,setPage]=useState(1);
  const[totalPages,setTotalPages]=useState(null)

//   data filling
async function fetchBlogPost(page=1)
{
   setLoading(true);
   let url=`${baseUrl}?page=${page}`;
   try{
    const response = await fetch ('https://codehelp-apis.vercel.app/api/get-blogs')
    const output= await response.json();
    console.log(output);
    setPage(output.page);
    setPosts(output.posts);
    setTotalPages(output.totalPages);
   }
   catch (error){
     console.log("Error in fetching the data");
     setPage(1);
     setPosts([]);setTotalPages(null);
   }
   setLoading(false);
}

   const value={
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages
   };

   function handlePageChange(page)
   {
    setPage(page);
    fetchBlogPost(page);
   }
}

return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>