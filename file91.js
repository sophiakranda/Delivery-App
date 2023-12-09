var cardPasta = document.getElementById('pasta-card');
var cardSalad = document.getElementById('salad-card');
var cardDesserts = document.getElementById('desserts-card');

var pastaDesc = document.getElementById('pasta-desc');
var saladDesc = document.getElementById('salad-desc');
var dessertsDesc = document.getElementById('desserts-desc');

cardPasta.addEventListener("click", ()=>{
    saladDesc.style.display = "none";
    pastaDesc.style.display = "block";
    dessertsDesc.style.display = "none";
    cardPasta.classList.add("cardStyle");
    cardSalad.classList.remove("cardStyle");
    cardDesserts.classList.remove("cardStyle");
})

cardSalad.addEventListener("click", ()=>{
    saladDesc.style.display = "block";
    pastaDesc.style.display = "none";
    dessertsDesc.style.display = "none";
    cardPasta.classList.remove("cardStyle");
    cardSalad.classList.add("cardStyle");
    cardDesserts.classList.remove("cardStyle");
})

cardDesserts.addEventListener("click", ()=>{
    saladDesc.style.display = "none";
    pastaDesc.style.display = "none";
    dessertsDesc.style.display = "block";
    cardPasta.classList.remove("cardStyle");
    cardSalad.classList.remove("cardStyle");
    cardDesserts.classList.add("cardStyle");
})

$(document).ready(function(){
    $(".circle").click(function(){
        $(".circle").slideToggle(1000);
        $(".circle").fadeToggle(1000);
        var div = $(".circle");
        $("#animate").click(function(){
            div.animate({width:"200px", opacity: "0.2"}, 2000) 
            div.animate({height:"200px", opacity: "0.4"}, 2000) 
            div.animate({width:"100px", opacity: "0.7"}, 2000) 
            div.animate({height:"100px", opacity: "1"}, 2000) 
        })      });
   
    $(".square").click(function(){
        $(".square").slideUp(1000);
        $(".square").fadeToggle(1000);
            div.animate({right:"500px"}, 1000) 
            div.animate({left:"500px"}, 1000) 
            console.log("square")

        // $(".square").fadeTo(1000, 0.3);
        // $(".square").slideUp(1000);
        // $(".square").fadeToggle(1000);
        var div = $(".square");
        $("#animate").click(function(){
            div.animate({width:"200px", opacity: "0.2"}, 2000) 
            div.animate({height:"200px", opacity: "0.4"}, 2000) 
            div.animate({width:"100px", opacity: "0.7"}, 2000) 
            div.animate({height:"100px", opacity: "1"}, 2000)
            console.log() 
        })      });


});