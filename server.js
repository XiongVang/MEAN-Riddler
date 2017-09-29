var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var port = 2232;
var index = require( './modules/routes/index' );
var messages = require( './modules/routes/messages' );

app.use( bodyParser.json() );
app.use( express.static( 'public' ) );
app.use( '/', index );
app.use( '/messages', messages );

app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end server up