var mongoose = require ('mongoose')

var userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: [true, 'Please enter your first name']
    },
    middleName: {
        type: String, 
    },
    lastName: {
        type: String, 
        required: [true, 'Please enter your middle name']
    },
    suffix: {
        type: String,
    },
    password: {
        type: String,
        default: 'ChangeMe!23'
    },
    type: {
        type: String,
        enum: ['faculty', 'employee', 'users'],
        required: [true, 'Please select a category type']    
    },
    email: {
        type: String, 
        required: [true, 'Please enter your email address'],
        unique: true,
        index: true
    }
})


module.exports = mongoose.model('User', userSchema);