$(document).ready ( function () {

    // Chemin des fichiers css chargés en fonction du thème voulu par l'utilisateur
    let cssCharge = { 
        0 : '<link id="theme" rel="stylesheet" href="css/lighttheme.css" type="text/css" />', 
        1 : '<link id="theme" rel="stylesheet" href="css/darktheme.css" type="text/css" />'
     };

    // Initialisation du mode lumineux
    if(!sessionStorage.getItem("theme")){
        sessionStorage.setItem("theme", 0);
    }

    // Initialisation du mode fond d'image
    if(!sessionStorage.getItem("bgImage")){
        sessionStorage.setItem("bgImage", 0);
    }

    // Changement de thème
    function swapTheme(themeVal){
        $('head #theme').remove();
        $('head').append(cssCharge[themeVal]);
        setBackground(sessionStorage.getItem("bgImage"));
    }

    // Changement du fond de couleur
    function setBackground(isBackgroundImageActivated){
        if(isBackgroundImageActivated == 0){
            $('body').css({ "background-color": "transparent", "background-image": "url('images/pexels-rodnae-productions-7915289.jpg", "background-size": "cover" });
        }
        else{
            $('body').css({ "background-image": "none" });
            if(!sessionStorage.getItem("backgroundColor")){
                sessionStorage.getItem("theme") == 0 ? $('body').css({ "background-color": "#729FCF" }) : $('body').css({ "background-color": "#302D2D" });
            }else{
                $('body').css({ "background-color": sessionStorage.getItem("backgroundColor") });
            }
        }
    }

    // Aaption des classes bootstrap responsive suivant la résolution
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
    

    // Event au clique du bouton de changement de thème
    $( "#light" ).on( "click", function() {

        if(sessionStorage.getItem("theme") == 0){
            sessionStorage.setItem("theme", 1);
            swapTheme(sessionStorage.getItem("theme"));
        }else{
            sessionStorage.setItem("theme", 0);
            swapTheme(sessionStorage.getItem("theme"));
        }
    });

    // Ajout du commentaire au clique du bouton "Envoyer"
    $( "input.sendComment" ).on( "click", function() {
        $('.alert').remove();

        let firstName = $('#inputFirstName').val();
        let lastName = $("#inputLastName").val();
        let comment = $("#inputComment").val();

        if($('form input').val() && $('form textarea').val()){
            
            $('article.commentSpace').append(
            "<div class='rounded commentaire p-2 mb-2'>" +
            "<p>" + comment + "</p>" +
            "<span class='fw-lighter'>" + firstName + " " + lastName + "<span>" +
            "</div>"
            );

            $('form input[type=text], form textarea').val('');
        }else{
            $('form').prepend(
            "<div class='col-12 alert alert-danger' role='alert'>"
            + "Veuillez remplir tous les champs !"
            + "</div>"
            );
        }

    });


    // Event au clic sur le bouton de changement d'image de fond
    $('#bgImage').on( "click", function() {
        if(sessionStorage.getItem('bgImage') == 0){
            sessionStorage.setItem('bgImage', 1);
            setBackground(sessionStorage.getItem('bgImage'));
        }
        else{
            sessionStorage.setItem('bgImage', 0);
            setBackground(sessionStorage.getItem('bgImage'));
        }
    });


    // Au clic sur l'icone de changement de couleur de fond, afficher le color picker
    $('i#bgcolor').on( "click", function() {
        $('#colorPicker').click();
    });

    // Changement de la couleur de fond à la sélection
    $('#colorPicker').on( "click", function() {
        sessionStorage.setItem('bgImage', 1);
        setBackground(sessionStorage.getItem('bgImage'));

        setInterval(()=>{
            let color = $(this).val();
            document.body.style.backgroundColor = color;
            sessionStorage.setItem("backgroundColor", color);
        }, 200);
    });

    // Chargement du thème et du background
    setBackground(sessionStorage.getItem("bgImage"))
    swapTheme(sessionStorage.getItem("theme"));
    $(window).on('resize', jqueryResize);

});