const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUserById,
    addNewFriend

} = require('../../controllers/userController');



// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/: userId
router.route('/:userId').get(getUserById).delete(deleteUserById);


// /api/users/:userId/friends
router.route('/:userId/friends/:friendId').post(addNewFriend);


module.exports = router;