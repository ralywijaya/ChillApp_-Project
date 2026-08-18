const db = require('../config/database.config');

const getUsers = async () => {
  return db('users');
};

const postUsers = async (data) => {
  return db('users').insert(data);
};

const deleteUsers = async (id) => {
  return db('users').where({ id_user: id }).delete();
};

const updateUser = async (id, data) => {
  return await db('users').where({ id_user: id }).update({
    user_nama: data.user_nama,
    user_password: data.user_password,
  });
};

module.exports = { getUsers, postUsers, updateUser, deleteUsers };
