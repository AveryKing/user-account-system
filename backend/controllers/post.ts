import {Request, Response} from 'express';
import {Post, IPost} from "../models/Post"
const postRouter = require('express').Router();

postRouter.get('/:post', (req: Request, res: Response) => {
    if(!req.params.post) {
        return res.status(400).json({
            error:'No post was provided'
        });
    }

    const postId = req.params.post
    Post.findOne({_id:postId})
        .then(post => {
            return res.json({post})
        })
        .catch(err => {
            return res.status(404).json({
                error:'The requested post does not exist'
            });
        })
})

postRouter.post('/multiple', (req:Request, res:Response) => {
    if(!req.body.posts) {
        return res.status(400).json({
            error:'invalid parameters'
        })
    }

    const posts = req.body.posts
    Post.find({ '_id': { $in: posts } })
        .then(postsData => {
           return res.json(postsData)
        }).catch(err => {
            return res.status(404).json({
                error:'There was a problem with your request'
            })
    })
})

export default postRouter;