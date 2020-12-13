import {Schema, model} from 'mongoose';

const AuthorSchema = new Schema({
    name : {
        type : String
    },
    about : {
        type : String
    }
});

module.exports = model('Author', AuthorSchema);