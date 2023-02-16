const router = require('express').Router();

const {

    getThoughts,
    createThought,
    getThoughtsById,
    updateThought,


} = require('../../controllers/thoughtController');


 // /api/thought/

router.route('/').get(getThoughts).post(createThought);


// /api/thought/:thoughtId

router.route('/:thoughtId').get(getThoughtsById).put(updateThought);

module.exports = router;