var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var port = 2232;
var index = require( './modules/routes/index' );
var riddles = require( './modules/routes/riddles' );

app.use( bodyParser.json() );
app.use( express.static( 'public' ) );
app.use( '/', index );
app.use( '/riddles', riddles );

app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end server up