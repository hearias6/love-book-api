import {Schema, model} from 'mongoose';

const UserSchema = new Schema({
    name : {
        type : String
    },
    birthdate : {
        type : Date,
        default : new Date()
    },
    username : {
        type : String
    },
    password : {
        type : String
    },
    terms : {
        type : Boolean
    },
    enabled : {
        type : Boolean
    }
});

module.exports = model('User', UserSchema);