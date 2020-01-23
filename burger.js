$(".menu a").click(function(){
    $(".menu").hide();
    });
    $(".menu-icon").click(function(){
    $(".menu").show();
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });