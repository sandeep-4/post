const Post=require('../model/post');

exports.test=async(req,res)=>{
    res.json({
       msg: 'Hello from controller'
    })
}

exports.addPost=async(req,res)=>{
    const {title,imageUrl,description,postid}=req.body
    await Post.create({title,imageUrl,description,postid}).then((result)=>{
        if(!result){
            res.json('error sending data');
        }
        res.status(200).json('Post created')
    }).catch((err)=>{
        res.json(err);
    })
}

exports.listPost=async(req,res)=>{
    await Post.find({}).then(docs=>{
        res.json(docs);
    }).catch(err=>{
        res.json(err)
    })
}

exports.getPostData=async(req,res)=>{
    await Post.findOne({postid:req.body.postid},(err,docs)=>{
        if(err){
            res.json({
                msg:'Eroor sending data',
                err
            })
        }
        res.json(docs)
    })
}

exports.updatePost=async(req,res)=>{
    await Post.findOneAndUpdate({postid:req.body.postid},{
        title:req.body.title,
        imageUrl:req.body.imageUrl,
        description:req.body.description,
    }).then(data=>{
        res.json('Updated')
    })
}

exports.deletePost=async(req,res)=>{
    await Post.findOneAndDelete({postid:req.body.postid})
    .then(d=>{
        res.json('Deleted sucessfully')
    })
}