import React from 'react'
import Posts from '../components/Posts'
import Comments from '../components/Comments'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

function Feed() {
    const [data,setData] = useState([])
    
    const [postComment, setPostComment] = useState([])
    const [postData,setPostData] = useState([])
    
    async function getData(){
        const data = await axios.get("https://jsonplaceholder.typicode.com/comments?_limit=100")
        
        setPostComment(data?.data)
    
    }
    
    useEffect(()=>{
        getData()
    },[])


    
    useEffect(()=>{
        
        let arr = [];

        for(let i=0; i<postComment?.length; i++){
            if(postComment[i]?.postId === postComment[i+1]?.postId){

            }
            else{
                
                arr.push(postComment[i])
                
            }
        }

        
    setData(arr)
    },[postComment])



return (
    <div >
        <Posts postComment={postComment} data={data}/>
       
    </div>
)
}

export default Feed