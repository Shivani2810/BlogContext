import React from 'react'

const Blogs = ()=>{

    // consuming the data

    const {posts,loading}= useContext(AppContext);
    return (
        <div>
         loading?(<Spinner/>):
         
          ( posts.length()===0 ?
            (<div>
                <p>No post Found</p>
            </div>):
           (posts.map ( (post)=> <div>
            <p>{posts.title}
                {/* date,content,posted on,tags which an array of multiple values */}
            </p>
            <div>
                {posts.tags.map ( (tag)=>{
                    return <span>{ `#${tag}`} </span>
                })}
            </div>
            </div>))

            

         );
        </div>
    )
}

export default Blogs