var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var messageSchema = new Schema({
    from: String,
    message: String
});
var Messages = mongoose.model( 'messages', messageSchema );
module.export = Messages;