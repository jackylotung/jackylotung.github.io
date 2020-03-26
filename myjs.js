var tmp_opacity = 0;
var deepen1 = setInterval(function() { Deepen() }, 120);

$("#Page_2").mouseover(function() {
    $("#text1_inP2").animate({ left: '15vw' }, 1500);
    $("#text2_inP2").animate({ left: '15vw' }, 1500);
});

$("#Page_2").mouseleave(function() {
    $("#text1_inP2").animate({ left: '-100vw' }, 1200);
    $("#text2_inP2").animate({ left: '100vw' }, 1200);
});


function Deepen() {
    tmp_opacity += 0.07;
    $(".P1").css("opacity", tmp_opacity);
}