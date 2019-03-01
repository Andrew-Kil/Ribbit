const { db } = require("./index.js");

const getAllPosts = (req, res, next) => {
  db.any(
    "SELECT posts.*, users.username, subribbits.name FROM posts JOIN users ON posts.user_id=users.id JOIN subribbits ON posts.sub_id=subribbits.id"
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received all posts"
      });
    })
    .catch(err => next(err));
};

const getSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.one("SELECT * FROM posts WHERE id=$1", postId)
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received one post"
      });
    })
    .catch(err => next(err));
};

const updatePost = (req, res, next) => {
  db.none("UPDATE posts SET body=${body} WHERE id=${id}", {
    body: req.body.body,
    id: parseInt(req.params.id)
  })
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Updated a post"
      });
    })
    .catch(err => next(err));
};

const deletePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.result("DELETE FROM posts WHERE id=$1", postId)
    .then(result => {
      res.status(200).json({
        status: "Success",
        message: "Removed a post",
        result: result
      });
    })
    .catch(err => next(err));
};

const createPost = (req, res, next) => {
  db.none(
    "INSERT INTO posts(body, user_id, upcroaks, downcroaks) VALUES(${body}, ${user_id}, ${upcroaks}, ${downcroaks})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Created new post"
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  createPost
};
