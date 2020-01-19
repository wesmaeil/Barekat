var decodedText = '';
$(".box").val("");
var stuff = [];
$(".btn-add").on("click", function() {

    var inputText = $(".box-input").val();
    stuff.push(inputText);
    var outputText = $(".box-output").val();
    var newOutput = inputText + "\n" + outputText;


 
    $(".box-output").addClass("r-to-l");
    $(".box-output").val(newOutput);
    $(".box-output").attr("placeholder", "");
    $(".box-input").val("");

});





$(".btn-go").on("click", function () {
var amount = stuff.length;

var randomThing = Math.floor(Math.random() * amount);
alert(stuff[randomThing]);

// console.log(stuff[randomThing]);
// console.log(stuff);

    
    
    
});



$(".btn-reset").on("click", function () {
$(".box").val("");
$(".box-output").attr("placeholder", "Possibilities...");
$(".box-output").removeClass("r-to-l");
stuff = [];



});