module.exports = (db, type) => {
    return db.define('article', {
      NArt: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      NomArt: {
        type: type.INTEGER,
        allowNull: false
      },
      Description: {
        type: type.STRING,
        allowNull: false  
      },
      CodeGenerique: {
        type: type.INTEGER,
        allowNull: false  
      }
    })
  }