const Joi = require("joi");
const connection = require("../config");
const db = connection.promise();
const bcrypt = require("bcrypt");

const validate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    email: Joi.string().email().max(255).presence(presence),
    password: Joi.string().min(8).max(24).presence(presence),
    username: Joi.string().max(255).presence(presence),
  }).validate(data, { abortEarly: false }).error;
};

const validatePassword = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.string()
    .min(8)
    .max(24)
    .presence(presence)
    .validate(data, { abortEarly: false }).error;
};

const findByEmail = (email) => {
  return db
    .query("SELECT * FROM users WHERE email = ?", [email])
    .then(([results]) => results[0]);
};

const findMany = () => {
  let sql = "SELECT id, email, username FROM users";
  return db.query(sql).then(([results]) => results);
};

const findOne = (id) => {
  return db
    .query("SELECT * FROM users WHERE id = ?", [id])
    .then(([results]) => results[0])
    .catch((err) => err);
};

const findByEmailWithDifferentId = (email, id) => {
  return db
    .query("SELECT * FROM users WHERE email = ? AND id <> ?", [email, id])
    .then(([results]) => results[0]);
};

const create = ({ email, password, username }) => {
  return bcrypt.hash(password, 10).then((hashedPassword) => {
    return db
      .query("INSERT INTO users SET ?", {
        email,
        hashedPassword,
        username,
      })
      .then(([result]) => {
        const id = result.insertId;
        return { email, username, id };
      });
  });
};

const changePassword = (newPassword, userId) => {
  return bcrypt.hash(newPassword, 10).then((hash) => {
    return db.query("UPDATE users SET hashedPassword = ? WHERE id = ?", [
      hash,
      userId,
    ]);
  });
};

const update = (id, newAttributes) => {
  return db.query("UPDATE users SET ? WHERE id = ?", [newAttributes, id]);
};

const destroy = (id) => {
  return db
    .query("DELETE FROM users WHERE id = ?", [id])
    .then(([result]) => result.affectedRows !== 0);
};

const verifyPassword = async (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};

module.exports = {
  findMany,
  findOne,
  validate,
  create,
  changePassword,
  update,
  destroy,
  findByEmail,
  findByEmailWithDifferentId,
  verifyPassword,
  validatePassword,
};
