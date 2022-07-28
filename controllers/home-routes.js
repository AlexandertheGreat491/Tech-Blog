const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post, User, Comment} = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        body: 'https://handlebarsjs.com/guide/',
        title: 'Handlebar Docs',
        comments: [{}, {}],
        user: {
            username: 'test_user'
        }
    });
});

module.exports = router;