module.exports = (db, type) => {
    return db.define('famille', {
      NFam: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      codeF: {
        type: type.INTEGER,
        allowNull: false
      },
      sf: {
        type: type.STRING,
        allowNull: true  
      }
    })
  }