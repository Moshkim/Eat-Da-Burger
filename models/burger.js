
let orm = require('../config/orm.js')

let burgers = {
    selectAll: function(callBack){
        orm.selectAll("burgers", function(res){
            callBack(res)
        })
    },
    update: function(set, where , callBack){
        orm.updateOne("burgers", set, where, function(res){
            callBack(res)
        })
    },
    create: function(what, callBack){
        orm.create("burgers", what, function(res){
            callBack(res)
        })
    }
}

module.exports = burgers