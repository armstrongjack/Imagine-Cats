const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const tenants = sequelize.define(
    'tenants',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  tenants.associate = (db) => {
    db.tenants.belongsToMany(db.users, {
      as: 'users',
      foreignKey: {
        name: 'tenants_usersId',
      },
      constraints: false,
      through: 'tenantsUsersUsers',
    });

    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.tenants.belongsTo(db.organizations, {
      as: 'organization',
      foreignKey: {
        name: 'organizationId',
      },
      constraints: false,
    });

    db.tenants.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.tenants.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return tenants;
};
