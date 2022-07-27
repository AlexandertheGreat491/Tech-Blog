const router = require("express").Router();
const { Comment } = require("../../models");


//GET route for all comments
router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//POST route for creating a new comment
router.post('/', (req, res) => {
    Comment.create({
        body: req.body.body,
        post_id: req.body.post_id,
        user_id: req.user_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
})

module.exports = router;