const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

//GET /api/users
router.get("/", (req, res) => {
  User.findAll({
    attributes: {
      exclude: ["password"],
    },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET /api/users/id
router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Post,
        attributes: ["id", "title", "body", "user_id"],
      },
      {
        model: Comment,
        attributes: ["id", "body", "user_id", "post_id"],
        include: {
          model: Post,
          attributes: ["title"],
        },
      },
    ],
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//POST /api/users
router.post("/", (req, res) => {});

//PUT /api/users
router.put("/:id", (req, res) => {});

//DELETE /api/users
router.delete("/:id", (req, res) => {});

module.exports = router;
