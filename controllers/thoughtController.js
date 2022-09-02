const { Thought, User } = require('../models')

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) => 
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID '})
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err))
    },

    createThought(req, res) {
        thought.create(req.body)
            .then((thought) => 
                res.json(thought))
                
            .then((thought) =>
                User.findOneAndUpdate(
                    { user: req.params.userId },
                    { $push: {thoughts: thought._id}},
                    { new: true }
                ),
            )
            .catch((err) => {
                console.log(err)
                return res.status(500).json(err)
            })
    },

    deleteThought(req, res) {
        thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) => 
                !thought
                    ? res.status(404).json({ message: 'No thought with this ID.' })
                    : res.json({message: 'Thought deleted. This sounds kinda ominous.'})
            )
            .catch((err) => res.status(500).json(err))
    },

    addReaction(req, res) {
            thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            )
                .then((thought) => 
                    !thought
                        ? res.status(404).json({message: 'No thought found with this ID.'})
                        : res.json(thought)
                    )
                    .catch((err) => res.status(500).json(err))
    },

    deleteReaction(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.body.reactionId } } },
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