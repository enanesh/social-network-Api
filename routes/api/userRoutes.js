const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUserById,
    addNewFriend,
    removeFriend

} = require('../../controllers/userController');



// /api/user
router.route('/').get(getAllUsers).post(createUser);

// /api/user/: userId
router.route('/:userId').get(getUserById).delete(deleteUserById);


// /api/user/:userId/friends/:friendsId
router.route('/:userId/friends/:friendId').post(addNewFriend).delete(removeFriend);



module.exports = router;