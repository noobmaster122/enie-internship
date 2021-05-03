module.exports = (db, type) => {
    return db.define('products', {
      NoProduit: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      NomProduit: {
        type: type.STRING,
        allowNull: false
      }
    })
  }