//carousel play/pause buttons
$(function () {
    $(".carousel").carousel( { interval: 2000, pause: "false"} );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                $(".carousel").carousel("pause");
                $("#carouselButton").children("i").removeClass("fa-pause");
                $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

//login and reserve buttons modal popup
$(function() {
    $('#reserveButton').click(function(){
        $('#reserveModal').modal('show');
    }),
    $('#loginButton').click(function(){
        $('#reserveModal').modal('show');
    });
});