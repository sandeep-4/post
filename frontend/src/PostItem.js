import axios from 'axios';
import React from 'react';
import {Link, useHistory} from 'react-router-dom';

function PostItem({post}){
    const history=useHistory()
    const deletePost=(postid)=>{
        axios.post('/api/post/deletepost',{postid:postid}).then((res)=>{
            alert(res.data)
            history.go(0);
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="col-md-8 shawdow p-3 mb-5 bg-white rounded">
        <h1 className="p-1">{post.title}</h1>
        <img style={{height:'200px'}} src={post.imageUrl} className="img-flid" alt={post.title} />
        <p className="p-1">{post.description}</p>
        <Link to={`/editpost/${post.postid}`}><li className='btn btn-info'>Edit</li></Link>
        <button style={{margin:'10px'}} onClick={()=>{deletePost(post.postid)}} className="btn btn-danger">Delete</button>
        
        </div>
    )
} 
export default PostItem;