$(document).ready ( function () {
    let cssCharge = { 
        0 : '<link id="theme" rel="stylesheet" href="css/lighttheme.css" type="text/css" />', 
        1 : '<link id="theme" rel="stylesheet" href="css/darktheme.css" type="text/css" />'
     };

    if(!sessionStorage.getItem("theme")){
        console.log('coucou');
        sessionStorage.setItem("theme", 0);
    }else{
        sessionStorage.getItem("theme");
    }

    // $("form").clear();

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

    $( "input.sendComment" ).on( "click", function() {
        let firstName = $('#inputFirstName').val();
        let lastName = $("#inputLastName").val();
        let comment = $("#inputComment").val();

        $('article.commentSpace').append(
        "<div class='rounded commentaire p-2 mb-2'>" +
        "<p>" + comment + "</p>" +
        "<span class='fw-lighter'>" + firstName + " " + lastName + "<span>" +
        "</div>"
        );

        $('form input[type=text], form textarea').val('');
    });

    $('#bgcolor').on( "click", function() {
        $('#cokorPicker').click();
    });

    swapTheme(sessionStorage.getItem("theme"));
    $(window).on('resize', jqueryResize);

});