import {model, Schema, Model, Document} from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

//Change these to enforce unique email/username requirements
const REQUIRE_UNIQUE_EMAIL: boolean = true;
const REQUIRE_UNIQUE_USERNAME: boolean = true;

interface IUser extends Document {
    email: string;
    username: string;
    password: string;
    location: string;
    age: number;
    biography: string;
    followers: number[];
    following: number[];
    posts: number[];
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: REQUIRE_UNIQUE_EMAIL },
    username: { type: String, required: true, unique: REQUIRE_UNIQUE_USERNAME },
    password: { type: String, required: true, select: false },
    location: {type: String, required: false},
    age: {type: Number, required: false},
    biography: {type: String, required: false},
    followers: {type: Array, required: false},
    following: {type: Array, required: false},
    posts: {type: Array, required: false}

});

if(REQUIRE_UNIQUE_EMAIL || REQUIRE_UNIQUE_USERNAME) {
    UserSchema.plugin(uniqueValidator);
}


const User: Model<IUser> = model('User', UserSchema)

export { IUser, User }