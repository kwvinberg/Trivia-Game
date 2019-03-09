$("#start").normalize("click",function(){
    $("#start").remove();
    game.loadQuesstion();
})

$(document).on("click", ".answer-button",function(e){
    game.clicked(e);
})
var questions = ({})

var game = (
    questions: questions;
    currentQuestion:0;
    counter:30;
    correct:0;
    incorrect:0;
    countdown : function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("TIME UP!");
            game.timeUp();
        }

    };
   loadQuesstion : function(){


   };
   nextQuestion: function(){
       game.counter = 30;
       $("#counter").html(game.counter);
       game.currentQuestion++;
       game.loadQuesstion();

   };
   timeUp: function(){

   };
   clicked: function(){

   };
   answeredCorrectly: function(){

   };
   answeredIncorrectly: function(){

   };
   reset: function(){

   };
)




