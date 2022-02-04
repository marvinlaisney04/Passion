$(document).ready ( function () {
    let theme;
    let cssCharge = { 
        0 : '<link id="theme" rel="stylesheet" href="css/lighttheme.css" type="text/css" />', 
        1 : '<link id="theme" rel="stylesheet" href="css/darktheme.css" type="text/css" />'
     };

    if(!sessionStorage.getItem("theme")){
        theme = sessionStorage.setItem("theme", 0);
    }else{
        theme = sessionStorage.getItem("theme");
    }

    function swapTheme(themeVal){
        $('head #theme').remove();
        $('head').append(cssCharge[themeVal]);
    }

    function jqueryResize() {
        if ($(this).width() < 1700) {
            $('.tuile li').removeClass('col-lg-2');
            $('.tuile li').addClass('col-lg-3');
            $('section').addClass('align-items-center');
        }
        else{
            $('.tuile li').removeClass('col-lg-3');
            $('.tuile li').addClass('col-lg-2');
            $('section').removeClass('align-items-center');
        }
    
        if ($(this).width() < 768) {
            $('.tuile').removeClass('justify-content-between');
            $('.tuile').addClass('justify-content-center');
        }else{
            $('.tuile').removeClass('justify-content-center');
            $('.tuile').addClass('justify-content-between');
        }
    }
    
    $( "#light" ).on( "click", function() {

        if(sessionStorage.getItem("theme") == 0){
            sessionStorage.setItem("theme", 1);
            swapTheme(sessionStorage.getItem("theme"));
        }else{
            sessionStorage.setItem("theme", 0);
            swapTheme(sessionStorage.getItem("theme"));
        }
    });

    swapTheme(theme);
    $(window).on('resize', jqueryResize);

});