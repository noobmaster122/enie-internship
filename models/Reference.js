module.exports = (db, type) => {
    return db.define('reference', {
      NRef: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      NomRef: {
        type: type.STRING,
        allowNull: false
      }
    })
  }