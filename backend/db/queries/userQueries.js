const { db } = require("./index.js");

const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received all users"
      });
    })
    .catch(err => next(err));
};

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one("SELECT * FROM users WHERE id=$1", userId)
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received one user"
      });
    })
    .catch(err => next(err));
};

const getAllPostsForAUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any(
    "SELECT posts.* FROM users JOIN posts ON posts.user_id = users.id WHERE users.id = $1",
    [userId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "All user posts"
      });
    })
    .catch(err => next(err));
};

const getAllCommentsForAUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any(
    "SELECT comments.* FROM comments JOIN comments ON comments.user_id = users.id WHERE users.id = $1",
    [userId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "All user comments"
      });
    })
    .catch(err => next(err));
};

const updateUser = (req, res, next) => {
  db.none(
    "UPDATE users SET username=${username}, email=${email} WHERE id=${id}",
    {
      username: req.body.username,
      email: req.body.email,
      id: parseInt(req.params.id)
    }
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Updated a user"
      });
    })
    .catch(err => next(err));
};

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result("DELETE FROM users WHERE id=$1", userId)
    .then(result => {
      res.status(200).json({
        status: "Success",
        message: "Removed a user",
        result: result
      });
    })
    .catch(err => next(err));
};

const createUser = (req, res, next) => {
  db.none(
    "INSERT INTO users(username, email) VALUES(${username}, ${email})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Created new user "
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getAllUsers,
  getSingleUser,
  getAllPostsForAUser,
  getAllCommentsForAUser,
  updateUser,
  deleteUser,
  createUser
};
