import {model, Schema, Model, Document} from 'mongoose';

interface IPost extends Document {
    content: string;
    score: number;
    author: Schema.Types.ObjectId;
    createdOn: string;
}

const PostSchema: Schema<IPost> = new Schema({
    content: {type: String, required: true},
    score: {type: Number, required: false},
    createdOn: {type: String, required: true},
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

});

const Post: Model<IPost> = model('Post', PostSchema);

export {IPost, Post}