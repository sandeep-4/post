const express=require('express');
const router=express.Router();

const { test, addPost, listPost, getPostData, updatePost, deletePost } = require('../controller/post');

router.get('/test',test);
router.post('/addnewpost',addPost);
router.get('/getposts',listPost);
router.post('/getpostdata',getPostData);
router.post('/updatepost',updatePost);
router.post('/deletepost',deletePost);


module.exports=router;