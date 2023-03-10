const router = require('express').Router();

const {

    getThoughts,
    createThought,
    getThoughtsById,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction


} = require('../../controllers/thoughtController');


 // /api/thought/

router.route('/').get(getThoughts).post(createThought);

;

// /api/thought/:thoughtId

router.route('/:thoughtId').get(getThoughtsById).put(updateThought).delete(deleteThought);

// /api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);


module.exports = router;