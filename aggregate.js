// Group by pf_id for a security - all portfolio
db.positions.aggregate( [
{ $match : { "security._id" : 108529 } },
{ $group : { _id : "$portfolio._id" , total : { $sum : "$amount" } } }
])

// Group by pf_id for a security - all portfolio
// (Alternative way - same result as above)
db.positions.group( {
    key : { "portfolio._id" : 1},
    cond : { "security._id" : 108529 },
    reduce : function(cur, result) { result.amount += cur.amount },
    initial : { amount : 0 }
})

// Group by pf_id for a security and a list of pf_id
db.positions.aggregate( [
{ $match : { "security._id" : 108529 , "portfolio._id" : { $in : [ 6232, 6141, 4764 , 4666] } } },
{ $group : { _id : "$portfolio._id" , total : { $sum : "$amount" } } }
])

// Group by pf_id for a security (Alternative way - same result as above)
db.positions.group( {
    key : { "portfolio._id" : 1},
    cond : { "security._id" : 108529, "portfolio._id" : { $in : [ 6232, 6141, 4764 , 4666] } },
    reduce : function(cur, result) { result.amount += cur.amount },
    initial : { amount : 0 }
})

// Group by pf_id for a security and a list of pf_id, sum up multiple columns
db.positions.aggregate( [
{ $match : { "security._id" : 108529 , "portfolio._id" : { $in : [ 6232, 6141, 4764 , 4666] } } },
{ $group : { _id : "$portfolio._id" , amount : { $sum : "$amount" } 
        , mktValue : { $sum : "$marketValue" } } }
])
        
// Group by pf_id for a security and a list of pf_id, sum up multiple columns
// (Alternative way - same result as above)
db.positions.group( {
    key : { "portfolio._id" : 1},
    cond : { "security._id" : 108529, "portfolio._id" : { $in : [ 6232, 6141, 4764 , 4666] } },
    reduce : function(cur, result) { result.amount += cur.amount, result.mktValue += cur.marketValue },
    initial : { amount : 0, mktValue : 0 }
})

// Group by pf_id for a security and a list of pf_id for settled positions
db.positions.aggregate( [
{ $match : { "security._id" : 108529 , "portfolio._id" : { $in : [ 6232, 6141, 4764 , 4666] }, 
$or: [ { settleDate : { $lte : new Date(2015, 0, 14) } },
        { settleDate : null}
    ]
} },
{ $group : { _id : "$portfolio._id" , amount : { $sum : "$amount" } } }
])

// Group by pf_id for a security and a list of pf_id for settled positions
// (Alternative way - same result as above)
db.positions.group( {
    key : { "portfolio._id" : 1},
    cond : { "security._id" : 108529, "portfolio._id" : { $in : [ 6232, 6141, 4764 , 4666] },
        $or: [ { settleDate : { $lte : new Date(2015, 0, 14) } },
            { settleDate : null} ] },
    reduce : function(cur, result) { result.amount += cur.amount, result.mktValue += cur.marketValue },
    initial : { amount : 0, mktValue : 0 }
})

// Group by pf_id and security_id for all securities and positions
db.positions.aggregate( [   
{ $group : { _id : { pfId: "$portfolio._id", secId: "$security._id" } ,
       amt : { $sum : "$amount" }, mktValue : { $sum : "$marketValue" } } 
}
])
db.positions.aggregate( [   
{ $group : { _id : { pfId: "$portfolio._id", securityId: "$security._id" } ,
       amount : { $sum : "$amount" }, mktValue : { $sum : "$marketValue" }} 
}
])



// Group by pf_id, security_id for a portfolio

db.positions.aggregate( [   

{ $match : { "portfolio.pfNumber" : 851 }} ,

{ $group : { _id : { pfId: "$portfolio._id", secId: "$security._id" } ,

       amt : { $sum : "$amount" }, mktValue : { $sum : "$marketValue" } } 

}

])

// Group by pf_id, security_id for a portfolio

// (Alternative way - same result as above)

db.positions.group( {

    key : { "security._id" : 1},

    cond : { "portfolio.pfNumber" : 851 },

    reduce : function(cur, result) { result.amount += cur.amount },

    initial : { amount : 0 }

})



// Group by pf_id, security_id for a list of portfolio

db.positions.aggregate( [   

{ $match : { "portfolio._id" : { $in : [ 6232, 6141, 4764 , 4666] } }} ,

{ $group : { _id : { pfId: "$portfolio._id", secId: "$security._id" } ,

       amt : { $sum : "$amount" }, mktValue : { $sum : "$marketValue" } } 

}

])

// Group by pf_id, security_id for a list of portfolio

// (Alternative way - same result as above)

db.positions.group( {

    key : { "security._id" : 1, "portfolio._id":1 },

    cond : { "portfolio._id" : { $in : [ 6232, 6141, 4764 , 4666] }},

    reduce : function(cur, result) { result.amount += cur.amount },

    initial : { amount : 0 }

})
