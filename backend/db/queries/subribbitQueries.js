const { db } = require("./index.js");

const getAllSubribbits = (req, res, next) => {
  db.any("SELECT * FROM subribbits")
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received all subribbits"
      });
    })
    .catch(err => next(err));
};

const getSingleSubribbit = (req, res, next) => {
  const userId = Number(req.params.id);
  db.one("SELECT * FROM subribbits WHERE id=$1", userId)
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "Received one subribbit"
      });
    })
    .catch(err => next(err));
};

const getAllPostsForASubribbit = (req, res, next) => {
  const subId = Number(req.params.id);
  db.any(
    "SELECT posts.*, users.username, subribbits.* FROM posts JOIN users ON posts.user_id=users.id JOIN subribbits ON posts.sub_id=subribbits.id WHERE subribbits.id = $1",
    [subId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "All subribbit posts"
      });
    })
    .catch(err => next(err));
};

const updateSubribbit = (req, res, next) => {
  db.none(
    "UPDATE subribbits SET name=${name}, info=${info}, subscribbitors=${subscribbitors} WHERE name=${name}",
    {
      name: req.body.name,
      info: req.body.info,
      subscribbitors: req.body.subscribbitors
    }
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Updated a subribbit"
      });
    })
    .catch(err => next(err));
};

const deleteSubribbit = (req, res, next) => {
  const id = Number(req.params.id);
  db.result("DELETE FROM subribbits WHERE name=$1", [id])
    .then(result => {
      res.status(200).json({
        status: "Success",
        message: "Removed a subribbit",
        result: result
      });
    })
    .catch(err => next(err));
};

const createSubribbit = (req, res, next) => {
  db.none(
    "INSERT INTO subribbits(name, info, subscribbitors) VALUES(${name}, ${info}, ${subscribbitors})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Created new subribbit"
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getAllSubribbits,
  getSingleSubribbit,
  getAllPostsForASubribbit,
  updateSubribbit,
  deleteSubribbit,
  createSubribbit
};
