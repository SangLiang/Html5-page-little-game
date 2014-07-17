var matchingGame = {};

matchingGame.deck = [
  
	'cardTHR', 'cardTHR',
	'cardFOU', 'cardFOU',
	'cardFIV', 'cardFIV',
	'cardSIX', 'cardSIX',
	'cardSEV', 'cardSEV',
	'cardEIG', 'cardEIG',
];

$(function(){
         matchingGame.deck.sort(shuffle);
         for(var i = 0;i < 11;i++){
		         $(".card:first-child").clone().appendTo("#cards");
		 }
		 $("#cards").children().each(function(index){
		        $(this).css({
				        "left" : ($(this).width() + 20) *(index % 4),
						"top" : ($(this).height() + 20) * Math.floor(index/4)
				});
				var pattern = matchingGame.deck.pop();
				$(this).find(".back").addClass(pattern);
				$(this).attr("data-pattern",pattern);
				$(this).click(selectCard);
		 });
});
function shuffle() {
    return 0.5 - Math.random();
}

function selectCard(){
   if($(".card-flipped").size() > 1) {
            return;
   }
   $(this).addClass("card-flipped");
   if($(".card-flipped").size() == 2) {
       setTimeout(checkPattern,700);
   }
}

function checkPattern() {
    if(isMatchPattern()) {
	      $(".card-flipped").removeClass("card-flipped").addClass("card-removed");
		  $(".card-removed").bind("-webkit-TransitionEnd",removeTookCards);
	}else {
	      $(".card-flipped").removeClass("card-flipped");
	}
}

function isMatchPattern() {
       var cards = $(".card-flipped");
	   var pattern = $(cards[0]).data("pattern");
	   var anotherPattern = $(cards[1]).data("pattern");
	   return (pattern == anotherPattern);
}

function removeTookCards() {
  $(".card-removed").remove();
}



















