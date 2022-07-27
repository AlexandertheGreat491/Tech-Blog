const router = require('express').Router();
const {User, Post, Comment} = require('../../models');

//GET /api/users
router.get('/', (req, res) => {
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//GET /api/users/id
router.get('/:id', (req, res) => {});

//POST /api/users
router.post('/', (req, res) => {});

//PUT /api/users
router.put('/:id', (req, res) => {});

//DELETE /api/users
router.delete('/:id', (req, res) => {});

module.exports = router;