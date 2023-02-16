const { User, Thought, reactionSchema } = require("../models");

module.exports = {
    
    //Get All thoughts (GET)
    
    getThoughts(req, res) {
        Thought.find({})
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // Get a single thought by its ID (GET)

    getThoughtsById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },


    //create a new thought(POST)

    createThought(req, res) {
        Thought.create(req.body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    //syntax to append a Value to an Array (MONGODB) I found an example on Stack-overflow of how to do it using Mongoose 
                    
                    { _id: req.body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                    
                );
            })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No User find with this ID!" })
                    : res.json(thought)
            )
                
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    //Update a thought by ID (PUT)

    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Delete a thought (DELETE)

    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought  with that ID' })
                    : User.deleteOne({ _id: { $in: thought.User } })
            )
            .then(() => res.json({ message: 'Thought deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    //create a reaction stored in a single thought's reactions array field (POST)

    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            // addToSet operator adds a value to an array unless the value is already present. 
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought find with Id!" })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },


    //delete to pull and remove a reaction by the reaction's ID (DELETE)

    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            //	pull Removes all array elements that match a specified query
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought find with this Id!" })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },


};