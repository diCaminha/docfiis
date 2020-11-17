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

  static associate(models) {
    this.belongsTo(models.Fii, { foreignKey: "fii_id", as: "fii" });
  }
}

module.exports = documento;
