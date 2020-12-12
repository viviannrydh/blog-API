const express=require('express');
const router=express.Router();
const Post=require('../models/Post')

//get all posts

 router.get('/',async (req,res)=>{
     //res.send('Display a list of posts');
    try{ 
    const posts=await Post.find();
     res.send(posts);
    } catch(error){
        res.send({message: error});
    }
 });

 // get specific post
router.get('/:postId',async (req,res)=>{
    //res.send('req.params.postId');
       try{ 
       const post=await Post.findById(req.params.postId);
        res.send(post);
       } catch(error){
           res.send({message: error});
       }
    });

 // create post
 router.post('/',async (req,res)=>{
     //res.send(req.body);
   const post=new Post(
       {    
           title: req.body.title,
           content: req.body.content,
           author: req.body.author,
           tags: req.body.tags
       })
   try{ 
        const savedPost=await post.save();
        res.send(savedPost);
    } catch(error){
        res.send({message: error});
   }
});
// update post
router.patch('/:postId',async (req,res)=>{
    //res.send(req.body);
    //res.send('req.params.postId');
  try{ 
       const updatedPost=await Post.updateOne(
           {_id:req.params.postId},
           {$set:{
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                tags: req.body.tags
           }}
           );
        res.send(updatedPost);
   } catch(error){
       res.send({message: error});
  }
});
 
// delete post
router.delete('/:postId',async (req,res)=>{
    //res.send(req.body);
    //res.send('req.params.postId');
  try{ 
       const deletePost=await Post.deleteOne(
           {_id:req.params.postId},
           {$set:{
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                tags: req.body.tags
           }}
           );
        res.send(deletePost);
   } catch(error){
       res.send({message: error});
  }
});

module.exports=router;