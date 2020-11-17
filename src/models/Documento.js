const { Model, DataTypes } = require("sequelize");

class documento extends Model {
  static init(connection) {
    super.init(
      {
        link: DataTypes.STRING,
        titulo: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }
}

module.exports = documento;
