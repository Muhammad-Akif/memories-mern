import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose';

export const getposts = async (req,res)=>{
    try {
        const postMessage = await PostMessage.find()

        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req,res)=>{
    const post = req.body;
    const newPost = new PostMessage(post)
    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updatePost = async (req,res)=>{
    const {id: _id} = req.params;
    const post = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {...post, _id}, {new: true})
    res.json(updatedPost);
}