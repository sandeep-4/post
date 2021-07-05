import axios from 'axios';
import React ,{ useEffect }from 'react';
import { useState } from 'react';
import PostItem from './PostItem';

function PostList(){

    const [postdata,setPostdata]=useState([])
    useEffect(() => {
        axios.get('/api/post/getposts').then((res)=>{
            // console.log(res.data)
            setPostdata(res.data)
        }).then(err=>{
            console.log(err)
        })
    }, [])

    const postlist=postdata.map(post=>{
        return(
            <div className="row justify-content-center">
            <PostItem post={post} />
            </div>
        )
    })


    return (
        <div>
        <a href="/addpost" className="btn btn-success">Add Post</a>
        {postlist}
        </div>
    )
}
export default PostList;