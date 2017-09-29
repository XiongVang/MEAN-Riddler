var express = require( 'express' );
var router = express.Router();
var mongoose = require( 'mongoose' );
var Riddles = require( '../models/riddles' );

mongoose.connect( 'mongodb://localhost:27017/canopusRiddles' );

router.get( '/', function( req, res ){
    console.log( 'in riddles get' );
    Riddles.find({}, function(err, response){
        if(err){
            res.sendStatus (500);
        }else {
            res.send(response);
        };
    } 
    );
}); // end messages get

router.post( '/', function( req, res ){
    console.log( 'in riddles post:', req.body );
    var ridd = new Riddles (req.body);
    ridd.save( function (err){
        if(err) {
        console.log('DB err', err);
        res.sendStatus(500)
    }//END if err
    else {
        res.sendStatus(200);
    }//ENd else
    })//END riddles save
}); //end messages post

module.exports = router;