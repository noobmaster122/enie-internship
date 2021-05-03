// import sequelize & schemas
const Sequelize = require("sequelize")
const db = require("../config/database")
const FamilleModel = require("./Famille")
const FournisseurModel = require("./Fournisseur")
const ArticleModel = require("./Article")
const ProductModel = require("./Product")
const DemandeurModel = require("./Demandeur")
const RefModel = require("./Reference")

// create models
const Famille = FamilleModel(db, Sequelize)
const Fournisseur = FournisseurModel(db, Sequelize)
const Article = ArticleModel(db, Sequelize)
const Product = ProductModel(db, Sequelize)
const Demandeur = DemandeurModel(db, Sequelize)
const Ref = RefModel(db, Sequelize)
const ProduitFournisseur = db.define("produit_fournisseur")

// define relationships
// product & article (one -> many)
Product.hasMany(Article)
Article.belongsTo(Product)

// article & ref (One -> many)
Article.hasMany(Ref)
Ref.belongsTo(Article)

// product & article (one -> many)
Product.hasMany(Article)
Article.belongsTo(Product)

// famille & article (One -> many)
Famille.hasMany(Article)
Article.belongsTo(Famille)

// demandeur & article (One -> many)
Article.hasMany(Demandeur)
Demandeur.belongsTo(Article)

// Post & Tag (many -> many)
Product.belongsToMany(Fournisseur, { through: ProduitFournisseur })
Fournisseur.belongsToMany(Product, { through: ProduitFournisseur })


// generate tables in DB
db.sync({ force: false }).then(() => {
  console.log("Tables Created!")
})

module.exports = {
  Famille,
  Product,
  Demandeur,
  Article,
  Ref,
  Fournisseur
}