var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Tickets = mongoose.model('Tickets', new Schema({ name: Number, tickets: Number }));
var FB_ID_list = mongoose.model('FB_ID_list', new Schema({ FB_ID: String , vote_to: String , vote_at : Date}));
var Votes = mongoose.model('Votes', new Schema({ id: Number, votefor : Number }));
var options = {
	replset:{
		socketOptions:{keepAlive:1}
	},
	server:{
		socketOptions:{keepAlive:1}
	}
};

mongoose.connect( 'mongodb://stu.csie.fju.edu.tw/beauty2013',options );

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));