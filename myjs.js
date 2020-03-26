$("#Page_2").mouseover(function() {
    $("#text1_inP2").animate({ left: '15vw' }, 1500);
    $("#text2_inP2").animate({ left: '15vw' }, 1500);
});
$("#page2").mouseleave(function() {
    $("#text1_inPg2").animate({ left: '-100vw' }, 1200);
    $("#text2_inPg2").animate({ right: '-100vw' }, 1200);
})
var tmp_opacity = 0;
var deepen1 = setInterval(function() { Deepen() }, 120);

function Deepen() {
    tmp_opacity += 0.07;
    $(".page1").css("opacity", tmp_opacity);
}