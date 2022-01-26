// ***
// The order of the index of added matter.
// The order of queries in this file is according to the number of call in production.
// most come first
// ***
var start = new Date(2014, 11, 8);
var end = new Date(2014, 11, 9);
// ***
// *** tradeDate,locationId,tradeAccountType
db.tickets.find( { tradeDate: new Date(2014, 11, 8), locationId:101, tradeAccountType:1 }).explain()
// ***
// *** tradeDate,trader,locationId,tradeAccountType
//db.tickets.find( { tradeDate: new Date(2014, 11, 8), locationId:101,tradeAccountType:1, "trades.executedBy": "GEH" }).explain()
// ***
// *** tradeDate,portfolio,locationId,portfolioIds,tradeAccountType
//db.tickets.find( { tradeDate: new Date(2014, 11, 8), locationId:101,tradeAccountType:1, "trades.allocations.pfId": {$in : [1549, 3251] } }).explain()
// ***
// *** tradeDate,tradeDateEnd,locationId,tradeAccountType
//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}, locationId:101,tradeAccountType:1} ).explain()
// ***
// *** postStatus,tradeDate,trader,locationId,tradeAccountType
//ets.find( { tradeDate: new Date(2014, 11, 8), locationId:101,tradeAccountType:1, "trades.executedBy": "GEH", "trades.postStatus":1 }).explain()
// ***
// *** assetId,locationId,tradeAccountType
//db.tickets.find( { "trades.security.assetId":"126694Z68", locationId:101,tradeAccountType:1 }).explain()
// ***
// *** postStatus,tradeDate,locationId,tradeAccountType
//db.tickets.find( { tradeDate: new Date(2014, 11, 8), locationId:101,tradeAccountType:1, "trades.postStatus":1 }).explain()
// ***
// *** tradeDate,locationId,ticketType,tradeAccountType
//db.tickets.find( { tradeDate: new Date(2014, 11, 8), locationId:101,tradeAccountType:1, "trades.postStatus":1, ticketTypeId:2 }).explain()
// ***
// *** assetId,tradeDate,locationId,tradeAccountType
//db.tickets.find( { "trades.security.assetId":"126694Z68", tradeDate: new Date(2014, 11, 8), locationId:101,tradeAccountType:1 }).explain()
// ***
// *** postStatus,tradeDate,portfolio,locationId,portfolioIds,tradeAccountType
//db.tickets.find( { tradeDate: new Date(2014, 11, 8), locationId:101, tradeAccountType:1, "trades.postStatus":1, "trades.allocations.pfId": {$in : [1549, 3251]} }).explain()
// ***
// *** tradeDate,tradeDateEnd,portfolio,locationId,portfolioIds,tradeAccountType
//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}, locationId:101,tradeAccountType:1, "trades.allocations.pfId": {$in : [1549, 3251] } }).explain()
// ***
// *** tradeDate,locationId,product,tradeAccountType
//db.tickets.find( { tradeDate: new Date(2014, 11, 8), locationId:101, tradeAccountType:1, "trades.security.productId":70 }).explain()
// ***
// *** postStatus,tradeDate,locationId,dataSourceId,tradeAccountType
//db.tickets.find( { tradeDate: new Date(2014, 11, 8), locationId:101, tradeAccountType:1, "trades.postStatus":1, "trades.dataSourceId":112 }).explain()
// ***
// *** postStatus,tradeDate,locationId,ticketType,tradeAccountType
//db.tickets.find( { tradeDate: new Date(2014, 11, 8), locationId:101,tradeAccountType:1, "trades.postStatus":1, ticketTypeId:2 }).explain()
// ***
// *** ???postStatus,lastUpdateDate,lastUpdateDateEnd,locationId,dataSourceId,tradeAccountType,allocationCompleteness???
//db.tickets.find( { lastUpdated: {$gte: start, $lte: end}, locationId:101,tradeAccountType:1, "trades.postStatus":1, "trades.dataSourceId":112 }).explain()
// ***
// *** tradeDate,tradeDateEnd,trader,locationId,tradeAccountType
//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}, locationId:101,tradeAccountType:1, "trades.executedBy": "GEH" }).explain()
// ***
// *** tradeDate,locationId,tradingDeskId,tradeAccountType
//db.tickets.find( { tradeDate: new Date(2014, 11, 8), locationId:101,tradeAccountType:1, tradingDeskId : 1255 }).explain()
// ***
// *** assetId,portfolio,locationId,portfolioIds,tradeAccountType
//db.tickets.find( { "trades.security.assetId":"912810RH3", "trades.allocations.pfId": {$in : [1549, 3251] }, locationId:101,tradeAccountType:1 }).explain()
// ***
// *** securityType,tradeDate,locationId,tradeAccountType
//db.tickets.find( { tradeDate: new Date(2014, 11, 8), locationId:101,tradeAccountType:1, "trades.security.securityTypeId" : 24 }).explain()
// ***
// *** postStatus,tradeDate,tradeDateEnd,trader,locationId,tradeAccountType
//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}, locationId:101,tradeAccountType:1, "trades.postStatus":1 ,"trades.executedBy": "GEH" }).explain()
// ***
// *** postStatus,assetId,portfolio,locationId,portfolioIds,tradeAccountType
//db.tickets.find( { "trades.security.assetId":"912810RH3", locationId:101,tradeAccountType:1, "trades.postStatus":1 ,"trades.allocations.pfId": {$in : [1549, 3251] } }).explain()
// ***
// *** tradeDate,locationId,lastUpdateUser(s),tradeAccountType
//db.tickets.find( { tradeDate: new Date(2014, 11, 8), locationId:101,tradeAccountType:1, userId : {$in:[546, 360]} }).explain()
// ***
// *** postStatus,tradeDate,tradeDateEnd,locationId,product,tradeAccountType
//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}, locationId:101,tradeAccountType:1, "trades.postStatus":1 ,"trades.security.productId": 20 }).explain()
// ***
// *** tradeDate,trader,locationId,tradeAccountType,transactionType
//db.tickets.find( { tradeDate : new Date(2014, 11, 8), locationId:101,tradeAccountType:1, "trades.postStatus":1
//   ,"trades.executedBy": "GEH" , "trades.transactionTypeName":{$in: ["SELL","SELL (TBA)"]} }).explain()
// ***
// *** ??? postStatus,lastUpdateDate,lastUpdateDateEnd,locationId,tradeAccountType,allocationCompleteness???
//db.tickets.find( { "lastUpdated" : {$gte: start, $lte: end}, locationId:101,tradeAccountType:1, "trades.postStatus":1 }).explain()
// ***
// *** postStatus,tradeDate,tradeDateEnd,portfolio,locationId,portfolioIds,tradeAccountType
//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}, locationId:101,tradeAccountType:1, "trades.postStatus":1 ,"trades.allocations.pfId": {$in : [1549, 3251] } }).explain()
// ***
// *** tradeDate,trader,portfolio,locationId,portfolioIds,tradeAccountType
//db.tickets.find( { tradeDate: new Date(2014, 11, 8), "trades.executedBy": "GEH", locationId:101,tradeAccountType:1, "trades.allocations.pfId": {$in : [1549, 3251] } }).explain()
// ***
// *** postStatus,securityType,tradeDate,locationId,tradeAccountType
//db.tickets.find( { tradeDate : new Date(2014, 11, 8), locationId:101,tradeAccountType:1, "trades.postStatus":1 ,"trades.security.securityTypeId": 24 }).explain()
// ***
// *** postStatus,tradeDate,trader,locationId,ticketType,tradeAccountType
//db.tickets.find( { tradeDate : new Date(2014, 11, 8), locationId:101,tradeAccountType:1, "trades.postStatus":1 ,"trades.executedBy": "GEH", ticketTypeId:2 }).explain()
// ***

// *** postStatus,tradeDate,tradeDateEnd,locationId,tradingDeskId,tradeAccountType

//db.tickets.find( { "tradeDate" : {$gte: start, $lte: end}, locationId:101,tradeAccountType:1, "trades.postStatus":1, tradingDeskId: 1284 }).explain()

// ...
// ...
