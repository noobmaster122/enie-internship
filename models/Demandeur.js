module.exports = (db, type) => {
    return db.define('demandeur', {
      ID: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Matricule: {
        type: type.INTEGER,
        allowNull: false
      },
      Nom: {
        type: type.STRING,
        allowNull: false,
        validate: {
            is: ["^[a-z]+$", 'i']
          }
      },
      Date: {
        type: type.DATE,
        allowNull: false  
      }
    })
  }