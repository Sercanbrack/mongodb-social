const { ObjectId } = require('mongoose').Types
const User = require('../models/User')

module.exports = {
    getUsers(req, res) {
        User.find()
            .then(async (users) => {
                const userObj = {
                    users,
                }
                return res.json(userObj)
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).json(err)
            })
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId})
            .select('-__v')
            .then(async (user) =>
            !user
                ? res.status(404).json({ message: 'No user with that ID.'})
                : res.json({user})
            )
            .catch((err) => {
                console.log(err)
                return res.status(500).json(err)
            })
    },

    createUser(req,res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err))
    },

    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID.' })
                    : res.json({user})
            )
            .catch((err) => res.status(500).json(err))
    },
    
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({message: 'No user with that ID.'})
                    : res.json({message: 'User successfully deleted.'})
            )
            .catch((err) => {
                console.log(err)
                return res.status(500).json(err)
            })
    },

    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({message: 'No user found with that ID.'})
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },

    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: { friendId: req.body.friendId } } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({message: 'No user found with that ID.'})
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    }
    
}