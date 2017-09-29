var express = require( 'express' );
var router = express.Router();
var mongoose = require( 'mongoose' );
var Messages = require( '../models/messages' );

mongoose.connect( 'localhost:/27017/canopusMessages' );

router.get( '/', function( req, res ){
    console.log( 'in messagesGet' );
    res.send( 'beep' );
}); // end messages get

router.post( '/', function( req, res ){
    console.log( 'in messages post:', req.body );
    res.send( 'boop' );
}); //end messages post

module.exports = router;