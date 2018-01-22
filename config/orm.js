
let connection = require('./connection.js')

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
    selectDevoured: function(table, col, where, callBack){
        let query = "select * from ?? where ?? = ?"

        connection.query(query, [table, col, where], function(error, data){

            if(error) throw error
            if(data){
                callBack(data)
            }
        })
    },
    selectNotDevoured: function(table, col, where, callBack){
        let query = "select * from ?? where ?? = ?"

        connection.query(query, [table, col, where], function(error, data){
            if(error) throw error

            if(data){
                callBack(data)
            }
        })
    },
    updateOne: function(table, col, cause, to, callBack){
        let query = "update ?? where ?? = ? set ?"
        connection.query(query, [table, col, cause, to], function(error, data){
            if(error) throw error

            callBack("Data has been updated!")
        })
    }
}