const { db } = require("./index.js");

const getAllPosts = (req, res, next) => {
  db.any(
    "SELECT posts.*, subribbits.name, subribbits.subscribbitors, users.username FROM posts JOIN subribbits ON posts.sub_id=subribbits.id JOIN users ON posts.user_id=users.id"
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received all posts info"
      });
    })
    .catch(err => next(err));
};

const getSinglePost = (req, res, next) => {
  const postId = Number(req.params.id);
  db.one(
    "SELECT posts.*, subribbits.name, users.username FROM posts JOIN subribbits ON posts.sub_id=subribbits.id JOIN users ON posts.user_id=users.id WHERE posts.id=$1",
    postId
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received single post info"
      });
    })
    .catch(err => next(err));
};

const getSinglePostInfo = (req, res, next) => {
  const postId = Number(req.params.id);
  db.any(
    "SELECT posts.*, subribbits.name, subribbits.subscribbitors, users.username, comments.comment, comments.user_id FROM posts JOIN subribbits ON posts.sub_id=subribbits.id JOIN users ON posts.user_id=users.id JOIN comments ON posts.id=comments.post_id WHERE posts.id=$1",
    postId
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received single post info"
      });
    })
    .catch(err => next(err));
};

const updatePost = (req, res, next) => {
  db.none("UPDATE posts SET body=${body} WHERE id=${id}", {
    body: req.body.body,
    id: Number(req.params.id)
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
  let postId = Number(req.params.id);
  db.result("DELETE FROM posts WHERE id=$1", postId)
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Removed a post"
      });
    })
    .catch(err => next(err));
};

const createPost = (req, res, next) => {
  db.none(
    "INSERT INTO posts(title, body, user_id, sub_id) VALUES(${title}, ${body}, ${user_id}, ${sub_id})",
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
  getSinglePostInfo,
  updatePost,
  deletePost,
  createPost
};
