const { db } = require("./index.js");

const getAllComments = (req, res, next) => {
  db.any("SELECT * FROM comments")
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received all comments"
      });
    })
    .catch(err => next(err));
};

const getAllCommentsForPost = (req, res, next) => {
  const postId = Number(req.params.id);
  db.any(
    "SELECT comments.*, users.*, posts.* FROM comments JOIN users ON comments.user_id=users.id JOIN posts ON comments.post_id=posts.id WHERE posts.id = $1",
    [postId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received all comments"
      });
    })
    .catch(err => next(err));
};

const getSingleComment = (req, res, next) => {
  const commentId = Number(req.params.id);
  db.one("SELECT * FROM comments WHERE id=$1", commentId)
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received one comment"
      });
    })
    .catch(err => next(err));
};

const updateComment = (req, res, next) => {
  db.none("UPDATE comments SET body=${body} WHERE id=${id}", {
    body: req.body.body,
    id: Number(req.params.id)
  })
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Updated a comment"
      });
    })
    .catch(err => next(err));
};

const deleteComment = (req, res, next) => {
  const commentId = Number(req.params.id);
  db.result("DELETE FROM comments WHERE id=$1", commentId)
    .then(result => {
      res.status(200).json({
        status: "Success",
        message: "Removed a comment",
        result: result
      });
    })
    .catch(err => next(err));
};

const createComment = (req, res, next) => {
  db.none(
    "INSERT INTO comments(body, user_id, post_id, comment_id, upcroaks, downcroaks) VALUES(${body}, ${user_id}, ${post_id}, ${comment_id}, ${upcroaks}, ${downcroaks})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Created new comment"
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getAllComments,
  getAllCommentsForPost,
  getSingleComment,
  updateComment,
  deleteComment,
  createComment
};
