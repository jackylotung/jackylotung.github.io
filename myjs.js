$("#info").click(function(){
	$("#info").slideUp(1000);


});
$("#picture1").click(function(){
    $("#info").slideToggle("slow");
    $("#interest").slideUp(1000);
    $("#picture2").slideToggle("normal");

});
$("#interest").click(function(){
    $("#interest").slideUp(1000);

});
$("#picture2").click(function(){
    $("#interest").slideToggle("slow");
    $("#info").slideUp(1000);
    $("#picture1").fadeToggle("slow");


});
