const { response, request } = require('express');
const Author = require('../models/author.model');

export const getAuthors=async (req=request, res=response)=>{

    const page = req.query.page || 0;
    const start = page * 5;
    const end = 5;

    try {
        let Authors = await Author.find()
        .skip(start)
        .limit(end)
        res.status(200).json({
            Authors
        });

    } catch (error) {
        console.log('Error Get Authors, ', error);
        res.status(500).json({
            msg : 'Error Get Authors!'
        })
    }

}

export const saveAuthor =async (req=request, res=response)=>{
    try { 
        const author = new Author(req.body)
        await author.save();

        res.status(200).json({
            author
        })

    } catch (error) {
        console.log('Error Save Author, ', error);
        res.status(500).json({
            msg : 'Error Save Author!'
        })        
    }
}
