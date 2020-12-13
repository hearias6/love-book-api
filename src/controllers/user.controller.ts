const { response, request } = require('express');
const User = require('../models/user.model');

export const getUsers=async (req=request, res=response)=>{

    const page = req.query.page || 0;
    const start = page * 5;
    const end = 5;

    try {
        let Users = await User.find()
        .skip(start)
        .limit(end)
        res.status(200).json({
            Users
        });

    } catch (error) {
        console.log('Error Get Users, ', error);
        res.status(500).json({
            msg : 'Error Get Users!'
        })
    }

}

export const saveUser =async (req=request, res=response)=>{
    try { 
        const user = new User(req.body)
        await user.save();

        res.status(200).json({
            user
        })

    } catch (error) {
        console.log('Error Save User, ', error);
        res.status(500).json({
            msg : 'Error Save User!'
        })        
    }
}
