import {Request, Response} from 'express';
import {User, IUser} from '../models/User'
const bcrypt = require('bcrypt');
const userRouter = require('express').Router();

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
        password: password
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