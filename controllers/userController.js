const { User, Thought } = require("../models");

module.exports = {
    
    //Gets All users (GET)
    getAllUsers(req, res) {
        User.find({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
        

        
    },

    // Gets a single user (GET)
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



    },


    // create a new User (POST)
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    // Update User (PUT)
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

        //**BONUS */
    
    //Remove a Users  associated thoughts when deleted.
    
    
    //Adds new friend to a user's friends list (POST)

    addNewFriend(req, res) {
        console.log('You are adding a new friend');
        console.log(req.body);
        User.findOneAndUpdate(
            { _id: req.params.friendId },
            { $addToSet: { friends: req.body } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user found with that ID :(' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },


    // Remove a friend from user's friend list (DELETE)

    removeFriend(req, res) {
       User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { assignment: { assignmentId: req.params.friendsId } } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user found with that ID :(' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },





}    