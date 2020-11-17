const { Model, DataTypes } = require("sequelize");

class fii extends Model {
  static init(connection) {
    super.init(
      {
        code: DataTypes.STRING,
        name: DataTypes.STRING,
        adm: DataTypes.STRING,
        manager: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }
}

module.exports = fii;