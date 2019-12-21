var express = require('express');
var router = express.Router();
var sampleList = require('./../sampleData/list.js')
var sampleShop = require('./../sampleData/shop.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('test api is working properly');
});

router.get('/list', function(req, res, next) {
  var data = sampleList
  var result = responseFn(sampleList)
  res.send(result)
});

router.get('/shop/:id', function(req, res, next) {
    var data = sampleShop
    var result = responseFn(data)
    res.send(result)
})

function responseFn(data){
  return {
    code: 1,
    data: data,
    msg: null
  }
}

module.exports = router;
