const router = require('express').Router();

const {

    getThoughts,
    createThought,


} = require('../../controllers/thoughtController');


 // /api/thought/
 
router.route('/').get(getThoughts).post(createThought);




module.exports = router;