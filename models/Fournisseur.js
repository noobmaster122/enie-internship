module.exports = (db, type) => {
    return db.define('fournisseur', {
      NFournisseur: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      NomFournisseur: {
        type: type.STRING,
        allowNull: false,
        validate: {
          is: ["^[a-z]+$", 'i']
        }
      }
    })
  }