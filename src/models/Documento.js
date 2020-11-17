const { Model, DataTypes } = require("sequelize");
const Fii = require("./Fii");

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
    this.belongsTo(Fii, { foreignKey: "fii_id", as: "fii" });
  }
}

module.exports = documento;
