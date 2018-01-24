
let connection = require('./connection.js')


function objToSql(ob) {
    var arr = [];
    
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

let orm = {
    selectAll: function(table, callBack){
        let query = "select * from ??"
        connection.query(query, [table], function(error, data){
            if(error) throw error
            
            if(data){
                callBack(data)
            }
        })
    },
    updateOne: function(table, set, where, callBack){
        var query = "update " + table
        query += " set "
        query += objToSql(set)
        query += " where "
        query += where
        
        console.log(" Query update string is " + query)
        connection.query(query, function(error, data){
            if(error) throw error
            
            console.log("Data has been updated!")
            callBack(data)
        })
    },
    create: function(table, what, callBack){
        let query = "insert into ?? set ?"
        connection.query(query, [table, what], function(error, data){
            if(error) throw error
            
            callBack(data)
        })
    }
}

module.exports = orm