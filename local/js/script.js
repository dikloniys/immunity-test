$(".js-header__burger").click(function() { 
    if($(".js-header__burger").hasClass("close")){
        $(".js-header__nav").fadeOut()
        $(".js-header__burger").removeClass("close")
        $(".js-nav-menu").fadeIn().animate({left: "100vw",height:"0%"},400)
    }else{
        $(".js-nav-menu").fadeIn().animate({left: "0vw",height:"100%"},400)
        $(".js-header__nav").fadeIn()
        $(".js-header__burger").addClass("close")
    }
});