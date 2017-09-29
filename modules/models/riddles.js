var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var riddleSchema = new Schema({
    creator: String,
    setup: String,
    punchline: String
});
var Riddles = mongoose.model( 'riddles', riddleSchema );
module.exports = Riddles;