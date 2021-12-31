import {Request, Response} from 'express';
import {User} from '../models/User'
const loginRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET: string = 'H(#(#Ji2mk34jruje9k2i3ij4ufnhv';

enum LoginMode {
    LoginWithEmail,
    LoginWithUsername
}

/**
 *  LOGIN_MODE can be changed to require email vs. username for login.
 *  Refer to 'LoginMode' enum which is defined above.
 **/
const LOGIN_MODE: LoginMode = LoginMode.LoginWithUsername;

loginRouter.post('/', async (req: Request, res: Response) => {
    const body = req.body;
    let user;

    switch (LOGIN_MODE as LoginMode) {
        case LoginMode.LoginWithEmail:
            user = await User.findOne({email: body.email});
            break;
        case LoginMode.LoginWithUsername:
            user = await User.findOne({username: body.username})
    }

    const credentialsValid: boolean = (user === null)
        ? false
        : await bcrypt.compare(body.password, user.password);

    if (!(user && credentialsValid)) {
        return res.status(401).json({
            error: 'The credentials provided are incorrect.'
        })
    }

    const userForToken: object = {
        username: user.username,
        id: user._id
    }

    const token: object = jwt.sign(userForToken, SECRET);

    return (LOGIN_MODE as LoginMode === LoginMode.LoginWithEmail)
        ? res.status(200).json({token, email: user.email, userId: user._id})
        : res.status(200).json({token, username: user.username, userId: user._id})

})

export default loginRouter;