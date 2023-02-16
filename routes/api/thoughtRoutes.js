const router = require('express').Router();

const {

    getThoughts,
    createThought,
    getThoughtsById,


} = require('../../controllers/thoughtController');


 // /api/thought/

router.route('/').get(getThoughts).post(createThought);


// /api/thought/:thoughtId

router.route('/:thoughtId').get(getThoughtsById)

module.exports = router;