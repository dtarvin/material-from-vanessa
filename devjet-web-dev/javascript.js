var $pages = $(".page");
var $overlay = $("#overlay");

$('.page a').on("click", function() {
    if ($overlay.hasClass("overlayAnimation")) return;
    $pages.fadeToggle(4000);
    $overlay.addClass("overlayAnimation").on("animationend", function() {
        $(this).removeClass("overlayAnimation");
    });
});