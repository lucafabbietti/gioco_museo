var redirect_time = 120000;  
var url_redirect = "../index.html"

var initial = setTimeout(redirect, redirect_time);

function redirect() {
    window.location.href = url_redirect;
}

$(document).click(function() {
    clearTimeout(initial);
    initial = setTimeout(redirect, redirect_time);
});