import React,{ useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';

function AddPost(){
    const [title,setTitle]=useState('');
    const [imageUrl,setImageUrl]=useState('')
    const [description,setDescription]=useState('')

    const addPost=()=>{
        let post={
            title:title,
            imageUrl:imageUrl,
            description:description,
            postid:uniqid()
        }
        // console.log(post);
        axios.post('http://localhost:5000/api/post/addnewpost',post).then(res=>{
            alert(res.data) 
        }).then(err=>{
            console.log(err)
        })
    }

    return (
        <div className='row justify-content-center'>
        <div className='col-md-6'>
        <div>
        <input type='text' placeholder='title' className="form-control"
         value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <input type='text' placeholder='image url' className="form-control" 
        value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}}/>
        <textarea cols='30' rows='10' placeholder='description' className='form-control'
        value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        <button onClick={addPost} className="btn btn-success">Post</button>

        </div>
        </div>
        </div>
    )
}
export default AddPost;