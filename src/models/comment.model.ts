import {Schema, model} from 'mongoose';

const BookSchema = new Schema({
    date : {
        type : Date,
        default : new Date()
    },
    description : {
        type : String
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = model('Comment', BookSchema);