import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';



function EditPost(){
    const history=useHistory()
    const [title,setTitle]=useState('');
    const [imageUrl,setImageUrl]=useState('')
    const [description,setDescription]=useState('')
    const params=useParams()
    useEffect(()=>{
        axios.post('/api/post/getpostdata',{postid:params.postid})
        .then((res)=>{
            console.log(res.data)
           const postdata=res.data
           setTitle(postdata.title)
           setImageUrl(postdata.imageUrl)
           setDescription(postdata.description)

          
        }).catch(err=>{
            console.log(err)
        })
    },[])

    const editPost=()=>{
        let updatepost={
            title:title,
            imageUrl:imageUrl,
            description:description,
            postid:params.postid
        }

        axios.post('/api/post/updatepost',updatepost).then(res=>{
            // console.log(res)
        alert(res.data)
        history.push('/')
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
        <div className='row justify-content-center'>
        <div className='col-md-6'>
        <div>
        <input type='text' placeholder='title' className="form-control"
         value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <input type='text' placeholder='image url' className="form-control" 
        value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}}/>
        <textarea cols='30' rows='10' placeholder='description' className='form-control'
        value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        <button onClick={editPost} className="btn btn-success">Update</button>

        </div>
        </div>
        </div>
        </div>
    )
}
export default EditPost;