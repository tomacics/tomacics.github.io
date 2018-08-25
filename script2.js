var color = "purple";
var number = 101;
var word = "cool";
if(color=== "purple"){
$(".North").css("background","purple");
}
if(number>100){
    $(".East").html("whoah, that's a big number");
}
    else{
    $(".East").html("just a regular number, please.");
}
if(word==="cool"){
    $(".South").html("Power of DOM");
}
    else{
    $(".West").html("Power of DOM");
}