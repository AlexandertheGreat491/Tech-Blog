const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);

  Post.findAll({
    attributes: ["id", "title", "body", "user_id"],
    include: [
      {
        model: Comment,
        attributes: ["id", "body", "user_id", "post_id"],
        include: {
          model: User,
          attributes: ["id", "username", "email", "password"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      //passes a single post object into the homepage template
      //console.log(dbPostData[0]);
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'body',
      'title'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'body', 'user_id', 'post_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({message: 'No post found with this id!'});
      return;
    }

    //serializes the data
    const post = dbPostData.get({plain: true});

    //passes the data to the template
    res.render('single-post', {post});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
