$(document).ready(function(){
    	$(".menu-icon").click(function(){
        $("#navbar").toggleClass("nav-active").toggleClass("nav-closed");
        $("#nav-links").toggleClass("nav-links").toggleClass("nav-links-closed");
    });
});