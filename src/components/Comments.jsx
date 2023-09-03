import React from 'react'



function Comments({ postCommentData}) {

    
return (

<div className='comment-container'>
   
    {
        
        postCommentData && postCommentData?.map((comment,i)=>(
        <div className='comment-data' key={i}>
            <h4 className='comment-text'>Post : {comment?.postId} Comment</h4>
          <div>
          {comment?.body}
          </div>
        </div>
        ))

        }
    

   


   </div>
  )
}



export default Comments