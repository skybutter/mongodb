// ***

// The order of the index of added matter

// ***

//db.tickets.find( { "trades.security.assetId" : "71645WAU5" } )
//db.tickets.find( { "tradeDate" : new Date(2014, 11, 9)} )
//db.tickets.find( { tradeDate: new Date(2014, 11, 8) }).sort( {_id:1} )
var start = new Date(2014, 11, 1);
var end = new Date(2014, 11, 5);
// ***
// The following query uses index tradeDate_-1_locationId
//   [index is good]
//db.tickets.find( { "tradeDate" : start}).explain()
// ***
// The following query uses index tradeDate_-1_locationId
//   [index is good]
//db.tickets.find( { "tradeDate" : start}).sort( {locationId:1}).explain()
// ***
// The following query uses index locationId_1_tradeDate_-1 - No use case sort by location
//   [index is good]
//db.tickets.find( { "tradeDate" : start, locationId: 101}).sort( {locationId:1}).explain()
// ***
// The following query uses index tradeDate_-1_trades.postStatus_1
//   [index is good]
//db.tickets.find( { tradeDate : start}).sort( { "trades.postStatus" :1}).explain()

//db.tickets.find( { tradeDate : start, "trades.postStatus" :{ $in: [ 0, 1 ] }}).explain()
// ***
// The following query uses index tradeDate_-1_locationId_1 //or tradeDate_-1_trades.postStatus_1
//   index is sometimes good when using tradeDate_location index.  Not when use with tradeDate_trades.postStatus index.
//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}}).hint({tradeDate:-1, locationId:1}).explain()

//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}}).explain()

//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}}).count()
// ***
// The following query uses index tradeDate_-1_trades.postStatus_1
//   index to be improved
//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}, "trades.postStatus":1} ).explain()
// ***
// The following query uses index locationId_1_tradeDate_-1
//   [index is good]
//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}, "locationId":101} ).explain()
// ***

// ????????????????????????????????????????????????
// The following query uses index locationId_1_tradeDate_-1 - BAD index
//  ??? index to be improved ???
//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}}).sort( {"locationId":1}).explain()

// if hint to use index tradeDate_locationId, caused Runtime error

//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}}).hint({tradeDate:-1, locationId:1}).sort( {"locationId":1}).explain()

// The following query uses index ???

//  [index is good] , but don't know which one is used as it said QueryOptimizerCursor

//db.tickets.find( { "tradeDate" : {$in: [start, end]}}).sort( {"locationId":1}).explain()

// ????????????????????????????????????????????????

// ***

// The following query uses index trades.security.assetId_locationId

//   [index is good]

//db.tickets.find( { "trades.security.assetId" : "912828VV9"} ).explain()

// should be ok with the above index, not optimal

//db.tickets.find( { "trades.security.assetId" : "912828VV9", "locationId":101} ).explain()

// ***

// The following query uses index ticketStatus_tradeDate

//   [index is good]

//db.tickets.find( { tradeDate : start, ticketStatus:"Posted"}).explain()

//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}, ticketStatus:"Posted"}).explain()
// ******************************************************************

// The following query uses index locationId_tradeDate

//   [index is good]

//db.tickets.find( { tradeDate : start, ticketStatus:"Posted", "locationId":101}).explain()

// Using ticketStatus_tradeDate index NOT as good

//db.tickets.find( { tradeDate : start, ticketStatus:"Posted", "locationId":101}).hint({"ticketStatus":1,tradeDate:-1}).explain()

//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}, ticketStatus:"Posted"}).explain()

// ******************************************************************

// The following query uses index tradeDate_locationId

//   [index is good], not optimal

//db.tickets.find( { tradeDate : start, userId:546}).explain()

//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}, userId:546}).sort({tradeDate:-1}).explain()

//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}, userId:546, locationId:101, ticketStatus: "Posted" }).explain()

// ******************************************************************

db.tickets.stats()

db.stats()

// ** Count
//db.tickets.find( { "tradeDate" : {$gte: start}}).count()
//db.tickets.find().count()
