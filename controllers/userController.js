const { User, Thought } = require("../models");

module.exports = {
    
    //Gets All users 
    getAllUsers(req, res) {
        User.find({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
        

        
    },

    // Gets a single user 
    getUserById(req, res) {
        User.findOne({ _id: req.params.userId })
            // populate contains douments from another collection
            .populate("thoughts")
            .populate("friends")
            // selects any populated paths for you 
            .select('-__v')
            //removes empty objects
            .lean()
            .then(async (user) =>
                !  user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json( user )
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });



    }
}    