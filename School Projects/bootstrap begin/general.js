$(document).ready (function() {

    $("#content").load("content.html");

    $("ul#nav li a").click(function() {
        var page = $(this).attr("href");
        $("#content").load("content/" + page + ".html");
        return false;
    });
});