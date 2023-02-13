
const { ObjectId } = require('mongoose').Types;


const { User,Thought } = require('../models');


module.exports = {
    
    getAllUsers(req, res) {
        User.find()
            .then(async (users) => {
                const userObj = {
                    users,
                };
                console.log(userObj)
                return res.json(userObj);
                })
                .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
        
             });
    },

    getUserById(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .lean()
            .then(async (user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json({
                        user
                    })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
}