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
        message: "Created new user "
      });
    })
    .catch(err => next(err));
};

// function createUser(req, res, next) {
//   const hash = authHelpers.createHash(req.body.password_digest);

//   db.none(
//     "INSERT INTO users (username, password_digest) VALUES (${username}, ${password_digest})",
//     { username: req.body.username, password_digest: hash }
//   )
//     .then(() => {
//       res.status(200).json({
//         message: "Registration successful."
//       });
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: err
//       });
//     });
// }

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("Log out - success!");
};

const loginUser = (req, res) => {
  res.json(req.user);
};

const isLoggedIn = (req, res) => {
  if (req.user) {
    res.json({ username: req.user });
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
