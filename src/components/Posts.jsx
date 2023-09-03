import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import Comments from './Comments'

function Posts({postComment,data}) {
  const [filterData, setFilterData] = useState([])
  const [postCommentData, setPostCommentData] = useState([])

  const  handleClick = (e) => {

    let array = [];

    for(let i=0; i<data?.length; i++){
        if(data[i]?.postId == e.target.value){
            
            array.push(data[i])

        }
        
    }

    setFilterData(array)

    }

    const handlePostClick = (id) => {
  
      let array = [];

      for(let i=0; i<postComment?.length; i++){
          if(postComment[i]?.postId == id){
              
              array.push(postComment[i])
  
          }
          
      }
  
      setPostCommentData(array)
    

    }

  

return (
  <div className='feed-container'>
   <div>
   <div >
        <select className='select-opt' onChange={handleClick}>
        <option value=" ">All</option>
        {data?.map((p,i)=>(
            <option 
            className='opt' 
            key={i}
            value={p?.postId}
            >
            {p?.postId}
            </option>
            
        ))}
    </select>

     </div>

     <div className='post-container' >
        {filterData == "" ? 
        (data?.map((d,index)=>(
          <div key={index} className='post-data' onClick={(e)=>handlePostClick(d?.postId)}>
            <h4>
                Post : {d?.postId}</h4>
            <div className='post-text'>{d?.body}</div>
            
          </div>
        ))) 

        : 

        ( 
        filterData?.map((data,index)=>(
        <div key={index} className='post-data' onClick={(e)=>handlePostClick(data?.postId)} >
          <h4>
              Post : {data?.postId}</h4>
          <div className='post-text'>{data?.body}</div>
          
        </div>
      ))
      )
      }
    </div>
   </div>

    <Comments postComment={postComment}  uniqueValue={data} postCommentData={postCommentData}/>

  </div>
  
   


    )
}

export default Posts