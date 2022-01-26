//db.tickets.find( { locationId : 101} ).count()



db.tickets.group( { key : { locationId : 1 },

    reduce : function (curr, result) { result.count++; }, 

    initial:{count: 0} 

} )
