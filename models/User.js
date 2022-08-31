const { Schema, model } = require('mongoose')
const thoughtSchema = require('./Thought')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            properties: {}
        },
        thoughts: [thoughtSchema],
        friends: [userSchema],
    },
    {
        toJSON: {
            getters: true,
        }
    }
)

const User = model('user', userSchema)

module.exports = User