const router = require('express').Router();

const {
    getAllUsers,
    getUserById

} = require('../../controllers/userController')


router.route('/').get(getAllUsers)

router.route('/:userId').get(getUserById)

module.exports = router;