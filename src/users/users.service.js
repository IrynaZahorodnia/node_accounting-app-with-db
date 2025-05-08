const { User } = require('../models/User.model');

function getAll() {
  return User.findAll();
}

function getById(id) {
  return User.findByPk(id);
}

function create(name) {
  return User.create({ name });
}

function deleteById(id) {
  User.destroy({
    where: {
      id,
    },
  });
}

function update({ id, name }) {
  const userToUpdate = getById(id);

  if (!userToUpdate) {
    return;
  }

  return User.update(
    { name },
    {
      where: {
        id,
      },
      returning: true,
    },
  );
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  update,
};
