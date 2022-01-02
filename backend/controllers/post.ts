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



export default postRouter;