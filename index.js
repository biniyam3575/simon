var list=["red","green","yellow","blue"];
var gameList=[];
var clickList=[];
var start= false;
var level=0;

$(document).keypress(function(){
    if(!start){
        $("h1").text("Level "+level)
        randomColor();
        start= true;
    }
});

$(".btn").click(function(){
    var clicked= $(this).attr("id");
    clickList.push(clicked);
    
    animation(clicked);
    sound(clicked);
    check();

});


function randomColor(){
    clickList=[];
    level++;
    $("h1").text("Level "+level);
    var randomNum= Math.floor(Math.random()*4);
    var randomCol= list[randomNum];
    gameList.push(randomCol);

    $("#"+randomCol).fadeIn(100).fadeOut(100).fadeIn(100);
    sound(randomCol);
}
function sound(col){
    var audio= new Audio("sounds/"+col+".mp3");
    audio.play();
}
function animation(c){
    $("#"+c).addClass("pressed");
    setTimeout(function(){
        $("#"+c).removeClass("pressed");
    },100);
}
function check(){
    if(gameList[clickList.length-1]===clickList[clickList.length-1]){
        if(gameList.length===clickList.length){
           setTimeout(function(){
            randomColor();
           },1000);
        }
    }
    else{
        sound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game over perss any key to restart");
        gameOver();
    }
}
function gameOver(){
    
    gameList=[];
    level=0;
    start=false;

}