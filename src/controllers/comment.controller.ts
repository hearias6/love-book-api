const { response, request } = require('express');
const Comment = require('../models/comment.model');

export const getComments=async (req=request, res=response)=>{

    const page = req.query.page || 0;
    const start = page * 5;
    const end = 5;

    try {
        let comments = await Comment.find()
        .skip(start)
        .limit(end)
        .populate('book','user');
        res.status(200).json({
            comments
        });

    } catch (error) {
        console.log('Error Get Comments, ', error);
        res.status(500).json({
            msg : 'Error Get Comments!'
        })
    }

}

export const saveComment =async (req=request, res=response)=>{
    try { 
        const comment = new Comment(req.body)
        await comment.save();

        res.status(200).json({
            comment
        })

    } catch (error) {
        console.log('Error Save Comment, ', error);
        res.status(500).json({
            msg : 'Error Save Comment!'
        })        
    }
}

