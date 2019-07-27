const DB = require('../');
var Doc = new DB('TEST');


Doc.find({a:1},{'deep.aa':1}, (err,res)=>{
    console.log(err);
    console.log(res);
})
