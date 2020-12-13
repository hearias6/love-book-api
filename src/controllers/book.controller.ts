const { response, request } = require('express');
const Book = require('../models/book.model');

export const getBooks=async (req=request, res=response)=>{

    const page = req.query.page || 0;
    const start = page * 5;
    const end = 5;

    try {
        let books = await Book.find()
        .skip(start)
        .limit(end)
        .populate('author','user');
        res.status(200).json({
            books
        });

    } catch (error) {
        console.log('Error Get Books, ', error);
        res.status(500).json({
            msg : 'Error Get Books!'
        })
    }

}

export const saveBook =async (req=request, res=response)=>{
    try { 
        const book = new Book(req.body)
        await book.save();

        res.status(200).json({
            book
        })

    } catch (error) {
        console.log('Error Save Book, ', error);
        res.status(500).json({
            msg : 'Error Save Book!'
        })        
    }
}

