
function loadFB(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/zh_TW/all.js#xfbml=1";
	  fjs.parentNode.insertBefore(js, fjs);
	}
loadFB(document, 'script', 'facebook-jssdk');

$(document).ready(function(){



    	if(true){
    		to_voted();
    	}

		$('.nowloading').css('transform','rotate(6000deg)').css('-webkit-transform','rotate(6000deg)');
    	$('img').imagesLoaded(function(){
    		$('.secondVoteLoading').toggle();
    		$('.secondVote').toggle();
		 	window.mySwipe = new Swipe(document.getElementById('slider'), {
	    		startSlide:6,
			  speed: 400,
			  continuous: true,
			  disableScroll: false,
			  stopPropagation: false,
			  callback: function(index, elem) {},
			  transitionEnd: function(index, elem) {}
			});

    	});
   
		$(".cand > div").click(function(e){
			var $target = $(e.target);
			if( $target.is($(".cand> div").eq(0)) ) {
			    window.mySwipe.slide(0, 400);				
			}else if($target.is($(".cand> div").eq(1))){
			    window.mySwipe.slide(1, 400);
			}else if($target.is($(".cand> div").eq(2))){
			    window.mySwipe.slide(2, 400);				
			}else if($target.is($(".cand> div").eq(3))){
			    window.mySwipe.slide(3, 400);				
			}else if($target.is($(".cand> div").eq(4))){
			    window.mySwipe.slide(4, 400);				
			}else if($target.is($(".cand> div").eq(5))){
			    window.mySwipe.slide(5, 400);				
			}
		});


		$(".pic_menu").click(function(e){
			var $target = $(e.target);
			if( $target.is($(".pic_menu").eq(0)) ) {
			    window.mySwipe.slide(0, 400);				
			}else if($target.is($(".pic_menu").eq(1))){
			    window.mySwipe.slide(1, 400);
			}else if($target.is($(".pic_menu").eq(2))){
			    window.mySwipe.slide(2, 400);				
			}else if($target.is($(".pic_menu").eq(3))){
			    window.mySwipe.slide(3, 400);				
			}else if($target.is($(".pic_menu").eq(4))){
			    window.mySwipe.slide(4, 400);				
			}else if($target.is($(".pic_menu").eq(5))){
			    window.mySwipe.slide(5, 400);				
			}
		});

		function to_voted(){
			voted = true;
			$(".vote_btn").addClass("disabled");
			$(".vote_btn").text('投票結束');
		}

		function vote_to(id){
			if(votedto!=-1){

			}else{
				votedto = id;
				if(FB.getUserID()==""){
					FB.login(function(response) {
					   if (response.authResponse) {
					     votedto = -1;
					     vote_to(id);
					   } else {
					     console.log('User cancelled login or did not fully authorize.');
					     votedto = -1;
					   }
					 }, {scope: 'email, user_about_me, publish_stream'});
				}else{
					alert("投票已經結束囉！");
					/*
					$.get('vote/'+(id+1)+'?token='+FB.getAccessToken(), function(data) {
					  alert('投票完成！'+data);
					  if (data.charAt(0)!='您') {
					  	$('.tickets').eq(id).html(parseInt($('.tickets').eq(id).text())+1);
					  };
					  FB.ui(
					  {
					    method: 'feed',
					    name: '飛上資頭變美女 輔大資工週 資訊博覽會暨校園美女選拔',
					    picture: 'http://stu.csie.fju.edu.tw/beauty/2013/img/2c'+(id+1)+'.png',
					    link: 'http://stu.csie.fju.edu.tw/beauty/2013/',
					    caption: '資工週美少女開跑囉！快點為心中的輔大校園美女投下一票吧！'
					  },
					  function(response) {
					    if (response && response.post_id) {
					      alert('訊息已發佈！');
					    } else {
					    }
					  }
					);		  
					  to_voted();
					});
					*/
				}
			}
		};

		$(".vote_btn").click(function(e){
			var $target = $(e.target);
			if( $target.is($(".vote_btn").eq(0)) ) {
			    vote_to(0);		
			}else if($target.is($(".vote_btn").eq(1))){
			    vote_to(1);
			}else if($target.is($(".vote_btn").eq(2))){
			    vote_to(2);		
			}else if($target.is($(".vote_btn").eq(3))){
			    vote_to(3);		
			}else if($target.is($(".vote_btn").eq(4))){
			    vote_to(4);		
			}else if($target.is($(".vote_btn").eq(5))){
			    vote_to(5);		
			}
			event.preventDefault();
		});

		$(".swipe-nav > li").click(function(e){
			var $target = $(e.target);			
			var now = window.mySwipe.getPos();
			if( $target.is($(".swipe-nav > li").eq(0)) ) {
			    window.mySwipe.slide(now-1, 400);				
			}else if( $target.is($(".swipe-nav > li").eq(2)) ) {
				window.mySwipe.slide(now+1, 400);	
			}
		});

		$('.main-pic').click(function(event){
			if(event.offsetX<380&&event.offsetY>20){
				var s = $(this).css("background-image")
				window.open(s.substr(4,s.length-5));
			}

		});
		var selectedPic = -1;
		var selectedPage = -1;
		function selectPic(num){
			if(selectedPic!=num||selectedPage!=window.mySwipe.getPos()){
				selectedPic = num;
				selectedPage = window.mySwipe.getPos();
				$(".main-pic").eq(selectedPage).css('z-index','1000').fadeOut().fadeIn(function(){
					$(".main-pic").eq(selectedPage).css("margin-top","-742px")
					.css("background-image","url("+$(".main-pic-nav > img").eq(selectedPage*5+num).attr('src')+")")
					.css("transform","translateY(760px) rotate(3deg)")
					.css("transition","transform 1s")
					.css("-webkit-transform","translateY(760px) rotate(3deg)")
					.css("-webkit-transition","-webkit-transform 1s")
				});;
				$(".main-pic").eq(selectedPage).css("-webkit-transform","").css("transform","");
			}
		}

		$(".main-pic-nav > img").click(function(e){
			var $target = $(e.target);			
			var px = window.mySwipe.getPos()*5;
			if( $target.is($(".main-pic-nav > img").eq(px+0)) ) {
			    selectPic(0);		
			}else if( $target.is($(".main-pic-nav > img").eq(px+1)) ) {
				selectPic(1);
			}else if( $target.is($(".main-pic-nav > img").eq(px+2)) ) {
				selectPic(2);	
			}else if( $target.is($(".main-pic-nav > img").eq(px+3)) ) {
				selectPic(3);	
			}else if( $target.is($(".main-pic-nav > img").eq(px+4)) ) {
				selectPic(4);
			}
		});

		$(".main-pic-closebtn").click(function(e){		
			selectedPic = -1;
			$(".main-pic").eq(window.mySwipe.getPos()).css('z-index','1000').fadeOut().fadeIn(function(){
				$(".main-pic").eq(window.mySwipe.getPos()).css("margin-top","-742px")
				.css("background-image","").css("display","none");
			});;
			$(".main-pic").eq(window.mySwipe.getPos()).css("-webkit-transform","").css("transform","");
		});

	
	var scrollQ = 0;
	var scrolling = false;
	var isMasonry = false;
	
	function sliding(way){
		if(!scrolling){
			scrolling = true;
			if(way==0||way=='up'){
				if (scrollQ!=0) {
					scrollQ-=1;	
				}else{
					scrollQ=$(".toScroll").length-1;
				};
			}
			else if(way==1||way=='down'){
				if (scrollQ!=$(".toScroll").length-1) {
					scrollQ+=1;	
				}else{
					scrollQ=0;
				};
			}
			$.scrollTo( $(".toScroll:eq("+scrollQ+")"), 400,function(){
				scrolling = false;
			});
			event.preventDefault();
		}
	}

	$("body").keydown(function(event){
		switch (event.keyCode){
			case 37: window.mySwipe.slide(window.mySwipe.getPos()-1, 400); break; //left
            case 38: sliding('up'); break; //up
            case 75: sliding('up'); break;
            case 107:sliding('up'); break;
            case 39: window.mySwipe.slide(window.mySwipe.getPos()+1, 400); break; //right
            case 40: sliding('down'); break;  //down
            case 74: sliding('down'); break;
            case 106:sliding('down'); break;
		}
	});

	$('.nav').find('li').eq(0).click(function(){
		scrollQ=0;
		$.scrollTo( $(".introduction"), 400);
	});
	$('.nav').find('li').eq(1).click(function(){
		scrollQ=1;
		$.scrollTo( $(".toScroll").eq(1), 400);
	});
	$('.nav').find('li').eq(2).click(function(){
		scrollQ=9;
		$.scrollTo( $(".toScroll").eq(9), 400);
	});

	var retrys = 0;
  	var $container = $('.item_list');
	function loading(){
		if ($("#justfont-badge").length!=1&&retrys<500) {
			retrys+=1;
		  	setTimeout(loading,10);
		}else{
		  	$("#justfont-badge").toggle();
		}
	}

	loading();

	var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
	var IE = ( navigator.userAgent.match(/(MSIE)/g) ? true : false );
	if(iOS){
		$('#intro').css('background-attachment', 'scroll' );
		$('#second').css('background-attachment', 'scroll' );
		$('#third').css('background-attachment', 'scroll' );
	}else{
		$('#intro').parallax("50%", -0.1);
		$('#second').parallax("50%", 0.1);
		$('#third').parallax("50%", -0.1);
	}
	if(IE){
		alert("本網站不支援IE，建議使用Mozilla Firefox或Google Chorme，謝謝！");
	}

})