var main = function () {
	"use strict";
	
	// Função que posta o comentário
	var post_comment = function(){
		var $new_comment = $("<p>"),
			$comment_text = $(".comment-input input");

		if($comment_text.val() !== ""){
			$new_comment.text($comment_text.val());
			$new_comment.hide();

			$(".comments").append($new_comment);
			$new_comment.fadeIn();
			$comment_text.val("");
		}
	};

	/**/
	$(".comment-input button").on("click", function(event){
		post_comment();
	});

	$(".comment-input input").on("keypress", function(event){
		if(event.keyCode == 13){
			post_comment();
		}
	});
};

// o simbolo $ serve para indicar um objeto jquery
$(document).ready(main); /*quando o documento que possui esse script estiver completo, ele roda o script*/