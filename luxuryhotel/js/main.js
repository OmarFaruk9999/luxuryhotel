$(document).ready(function() {


    $(".js-sticky-menu").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");

        }
    });
});