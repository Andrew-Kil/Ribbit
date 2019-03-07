const { db } = require("./index.js");

const authHelpers = require("../../auth/helpers.js");

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
  const userId = Number(req.params.id);
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
  const userId = Number(req.params.id);
  db.any(
    "SELECT posts.* FROM users JOIN posts ON posts.user_id=users.id WHERE users.id=$1",
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
  const userId = Number(req.params.id);
  db.any(
    "SELECT comments.* FROM users JOIN comments ON comments.user_id=users.id WHERE users.id=$1",
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

// Work in progress //
const getAllPostsCommentsForAUser = (req, res, next) => {
  const userId = Number(req.params.id);
  db.any(
    "SELECT posts.*, comments.* FROM users INNER JOIN posts ON posts.user_id=users.id INNER JOIN comments ON comments.user_id=users.id WHERE users.id=$1"
  );
};
// Work in progress //

const updateUser = (req, res, next) => {
  db.none(
    "UPDATE users SET username=${username}, email=${email} WHERE id=${id}",
    {
      username: req.body.username,
      email: req.body.email,
      id: Number(req.params.id)
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
  const userId = Number(req.params.id);
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
  const hash = authHelpers.createHash(req.body.password_digest);
  db.none(
    "INSERT INTO users(username, password_digest, email) VALUES(${username}, ${password_digest}, ${email})",
    {
      username: req.body.username,
      password_digest: hash,
      email: req.body.email
    }
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Created new user"
      });
    })
    .catch(err => next(err));
};

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("Log out - success!");
};

const loginUser = (req, res) => {
  res.json(req.username);
};

const isLoggedIn = (req, res) => {
  if (req.username) {
    res.json({ username: req.username });
  } else {
    res.json({ username: null });
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  getAllPostsForAUser,
  getAllCommentsForAUser,
  updateUser,
  deleteUser,
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn
};
