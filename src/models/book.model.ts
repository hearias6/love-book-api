import {Schema, model} from 'mongoose';

const BookSchema = new Schema({
    title : {
        type : String
    },
    description : {
        type : String
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },    
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = model('Book', BookSchema);