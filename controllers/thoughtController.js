const { User, Thought, reactionSchema } = require("../models");

module.expots = {
    
        //Get All thoughts (GET)
    
    getThoughts(req, res) {
        Thought.find()
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
                    : res.json(course)
            )
            .catch((err) => res.status(500).json(err));
    },


    //create a new thought(POST)

    createThought(req, res) {
        Thought.create(req.body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    //syntax to append a Value to an Array (MONGODB) I found an example on Stack overflow of how to do it using Mongoose 
                    
                    { _id: req.body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                    
                );
            })
                
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
 
}