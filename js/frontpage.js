
function myFunction(x) {
    x.classList.toggle("change");
    $('.header').hide();
        $('.home').hide();
        $('.menu').css('background',"red").show().slideDown(); 
        x.classList.show();   
}

$('.menu').ready(function(){
    $('.menu').hide();
})


// var texts = ["Pay a Grand Golf & Ocean Club", "Naples Beach Club", "Driftwood golf & ranch club","Homewood mountain Beach Club","Zapotal Golf & Beach Club","Taymouth Castle"];

