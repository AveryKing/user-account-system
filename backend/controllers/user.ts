import {Request, Response} from 'express';
import {User, IUser} from '../models/User'
const bcrypt = require('bcrypt');
const userRouter = require('express').Router();
const jwt = require('jsonwebtoken')


userRouter.get('/:userId', async (req:Request, res:Response) => {
    if(!req.params.userId) {
        return res.status(400).json({error:'No user ID given'})
    }
    const userId: string = req.params.userId
    User.findOne({_id:userId})
        .then(user => {
            res.json({user})
        }).catch(err => {
            return res.status(404).json({error:'That user does not exist'});
    })
})

userRouter.get('/validate', async (req:Request, res:Response) => {
    res.json({hello:'omg'})
})
/** Validates a token ***/
userRouter.post('/validate', async (req: Request, res: Response) => {

    const SECRET: string = 'H(#(#Ji2mk34jruje9k2i3ij4ufnhv';
    if(!req.body.token) {
        return res.status(401).json({error:'No token was provided'})
    }

    let decodedToken = undefined
    try {
        decodedToken = jwt.verify(req.body.token, SECRET)
        return res.json({isValid:true})
    } catch (error) {
        // throw error when it fails to decode and is bad token4
        return res.status(401).json({
            error: "invalid token"
        })//what a great idea!!!

    }

    res.json({test:'lol'})
})


/** Used to create a new account **/

userRouter.post('/', async (req: Request, res: Response) => {
    if (!req.body.email || !req.body.username || !req.body.password) {
        return res.json({
            error: 'The parameters provided are invalid.'
        });
    }

    const email: string = req.body.email;
    const username: string = req.body.username;
    const saltRounds: number = 10;
    const password: string = await bcrypt.hash(req.body.password, saltRounds)

    const user: IUser = new User({
        email: email,
        username: username,
        password: password,
        biography:null,
        location: null,
        age: null
    });

    user.save().then(newUser => {
        return res.send(newUser)
    }).catch(_error => {
        return res.json({
            error: 'There was an error with user registration.'
        });
    })
    return
})

userRouter.get('/getUserData', async (req: Request, res: Response) => {
    User.find({})
        .then(users => {
            const userData = [];
            const emailArray: Array<string> = [];
            const userArray: Array<string> = [];
            users.forEach(user => {
                emailArray.push(user.email);
                userArray.push(user.username);
            })
            userData.push(emailArray);
            userData.push(userArray);

            res.json({
                userData: userData
            });
        })

})

/** Used to check if an email or username is already in use **/
userRouter.post('/checkInUse', async (req: Request, res: Response) => {

    if (!req.body.email && !req.body.username) {
        res.json({
            error: 'The parameters provided are incorrect.'
        });
    }

    let user: IUser = req.body.email
        ? await User.findOne({email: req.body.email})
        : await User.findOne({username: req.body.username});

    return res.json({
        inUse: user ? true : false
    });
})


export default userRouter;