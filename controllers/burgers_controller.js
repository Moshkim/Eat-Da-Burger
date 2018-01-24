let express = require('express')

let router = express.Router()

let burger = require('../models/burger.js')


router.get('/', function(req, res){
    burger.selectAll(function(data){
        let burgerObj = {
            burger: data
        }
        console.log(burgerObj)
        res.render('index', burgerObj)
    })


})

router.post('/api/burgers', function(req, res){
    burger.create({
        name: req.body.name,
        devoured: req.body.devoured
    }, function(result){
        res.json(result)
    })

})

router.put('/api/burgers/:id', function(req, res){
    let condition = "id = " + req.params.id

    console.log("Condition", condition)
    
    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result){
            if(result.changedRows === 0){
                return res.status(404).end()
            }
            res.status(200).end()
        }
    )

})

module.exports = router