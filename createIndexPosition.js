// Index in the order of importance
// ...
//db.tickets.dropIndex( { "portfolio.pfNumber": 1 } )
//db.tickets.dropIndex( { "security.assetId": 1 } )

db.positions.ensureIndex( { "security._id" : 1 } )
db.positions.ensureIndex( { "portfolio._id" : 1 } )

db.positions.ensureIndex( { "portfolio.pfNumber" : 1 } )

db.positions.ensureIndex( { "security.assetId" : 1 } )
