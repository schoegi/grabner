$(document).ready(function() {
    $(".icon-menu").on("click", function() {
        $("header nav ul").toggleClass("open");
    });
});
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $("header nav ul").toggleClass("close");
    }
});