const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const images = sequelize.define(
    'images',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      prompt: {
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

  images.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.images.belongsTo(db.users, {
      as: 'user',
      foreignKey: {
        name: 'userId',
      },
      constraints: false,
    });

    db.images.belongsTo(db.organizations, {
      as: 'organization',
      foreignKey: {
        name: 'organizationId',
      },
      constraints: false,
    });

    db.images.hasMany(db.file, {
      as: 'generated_image',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.images.getTableName(),
        belongsToColumn: 'generated_image',
      },
    });

    db.images.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.images.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return images;
};
