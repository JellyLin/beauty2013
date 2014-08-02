
/*
 * GET home page.
 */
/*
var graph = require('fbgraph'),
	mongoose = require('mongoose'),
	SignedRequest = require('./facebook-signed-request');

var conf = {
    client_id:      '179882558834566'
  , client_secret:  '0c6081026c0cb429a217912ff869bb10'
  , scope:          'email, user_about_me, publish_stream'
  , redirect_uri:   'http://bz.weco.net:3000/vote/1'
};
SignedRequest.secret = "0c6081026c0cb429a217912ff869bb10";
*/

exports.index = function(req, res){
/*
	var Votes = mongoose.model( 'Votes' );
	var Tickets = mongoose.model( 'Tickets' );
	var tickets;
	Tickets.find(function(err, tick){
		tickets = tick;
		console.log(tickets);

		var vt = [false,-1];


		if(req.cookies.fbsr_179882558834566){
			var signedRequest = new SignedRequest( req.cookies.fbsr_179882558834566 );
			signedRequest.parse(function(errors, request){
				if(request.isValid()){
					var FB_ID = request.data.user_id;
					console.log(FB_ID);
					//todo: 檢查是否投票過
					
					Votes.find({id:FB_ID},function(err, result){
						if (err) { console.log('DB'+err) };
					    if (result&&result.length!=0) {
					    	console.log(result);
					    	console.log('voted');
					    	vt[0] = true;
					    	vt[1] = result[0].votefor;
					    	res.render('index', {voted: vt[0],votedto: vt[1],tickets: tickets});
						}else{
							res.render('index', {voted: vt[0],votedto: vt[1],tickets: tickets});
						}
					});
					
				}
			});
		}else{
			res.render('index', {voted: vt[0],votedto: vt[1],tickets: tickets});
		}
	});

*/
	res.render('index');
	
};

exports.vote = function(req, res){
	/*
	var FB_ID;
	var Votes = mongoose.model( 'Votes' );
	var Tickets = mongoose.model( 'Tickets' );

    //用cookie檢查
	if(req.cookies.fbsr_179882558834566){
		var signedRequest = new SignedRequest( req.cookies.fbsr_179882558834566 );
		signedRequest.parse(function(errors, request){
			if(request.isValid()){
				FB_ID = request.data.user_id;
				console.log(FB_ID + " by Cookie");
			}
		});
	}//用token檢查
	else if (req.query.token) {
        graph.setAccessToken(req.query.token);
        graph.get("me", function(err, FBres) {
			FB_ID = FBres.id;
			console.log(FB_ID + " by Token");
		});
    }
    else{
    	res.send('ERR FB');
    }

    if(FB_ID != null){	
		//todo:  1.檢查是否投過票

		Votes.find({ id: FB_ID }, function (err, result) {
			if (err) { console.log('DB'+err) };
		    if (!result||result.length==0) {
			//		 2.把投票寫到DB
				new Votes({ id: FB_ID, votefor: req.params.id }).save();
				console.log('done: '+ FB_ID+'投票給'+req.params.id+'號');
				res.send('投票給'+req.params.id+'號。');

				//更新票數
				Tickets.findOne({name:req.params.id},function(err, t){
					Votes.count({votefor:(req.params.id)},function(err,count){
						t.tickets = count;
						t.save();
					});
				});
			}
			else {
				console.log(result);
				res.send('您已經投票過了！');
			}
		});
    }

	*/

};