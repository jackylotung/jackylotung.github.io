
$("#picture1").click(function(){
    $("#info").slideToggle("slow");
    $("#interest").slideUp(1000);
    $("#picture2").slideToggle("normal");

});

$("#picture2").click(function(){
    $("#interest").slideToggle("slow");
    $("#info").slideUp(1000);
    $("#picture1").fadeToggle("slow");

});
$("#game").click(function(){
    $("#interest").fadeOut();
    $("#picture1").fadeOut();
    $("#picture2").fadeOut();
    $("#info").fadeOut();
    $("#instagram").fadeOut();
    $("#facebook").fadeOut();
    $("#main").fadeOut();
    $("#game").fadeOut();
    $("#body").fadeOut();
    $("#game_info").show();
}); 
