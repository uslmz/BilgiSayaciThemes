var site = {
	searchForm: function() {
		$("body").on("click",".trigger-search-form",function(){
			$("body").toggleClass("top-nav-active");
			if ($("body").hasClass("top-nav-active")) {
				$(".search-form input[type=text]").trigger("focus");
			}
		});
	},
	sidebarScroll: function() {
		if ($("html").hasClass("no-touch")) {
			$("#sidebar").niceScroll();
		}
	},
	mobileMenu: function() {
		$("body").on("click", ".trigger-menu", function(){
			$("body").toggleClass("mobile-menu-active");
		});
	},
	bandClick: function(){
		$("body > .band").click(function(){
			$("body").removeClass();
		});
	},
	winResizer: function() {
		$(window).resize(function() {
			$("body").removeClass();
		});
	},
	commentFormChanger: function() {
		if ($("#commentform").length > 0) {
			$(".comment-form-comment label").html("Yorum");
			$(".comment-form-author label").html("Ad & Soyad");
			$(".comment-form-email label").html("E-Mail");
			$(".comment-form-url label").html("Web Site");
        	$("#respond h3").html("Yorum Yapmak İster Misiniz ?");
	        $(".reply a").html("Cevap Ver");
	        $(".comment-form > p input[type=submit]").val("Yorumu Gönder");
		}
	}
};

$(window).load(function(){
	$(".band").bind("touchmove",false);
	site.searchForm();
	site.sidebarScroll();
	site.mobileMenu();
	site.bandClick();
	site.winResizer();
	site.commentFormChanger();
});