//impport mongoose
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // username: {
    //     type: String,
    //     trim: 'true',  //removes spaces if exist in the beginning
    //     require: true, //requires username or return error
    //     max: 12, // username character max
    //     unique: false, //unique usernames
    //     index: true, //add index
    //     lowercase: true, //convert username to lowercase
    // },
    name: {
        type: String,
        trim: true,
        // required: true,
        max: 32
    },
    email: {
        type: String,
        trim: true,
        // required: true,
        // unique: true,
        max: 32,
        lowercase: true
    },
    phoneNumber: {
        type: Number,
        trim: true,
        // unique: true,
    },
    address: {
        type: String,
        trim: true,
        // unique: true,
        max: 100,
        lowercase: true
    },
    salt: String,
    role: {
        type: String,
        default: 'subscriber'
    }
}, {timestamp: true}
);

// //virtual fields
// userSchema.virtual()


// //methods
// userSchema.methods = {

// }

//export user model
module.exports = mongoose.model('User', userSchema);