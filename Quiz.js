class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("lightblue");

    //write code to show a heading for showing the result of Quiz
    fill("deeppink")
    textSize(50);
    text("Result of the Quiz",210,50);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined)
    {
      for(var plr in allContestants)
      {
        var correctans = "2";
        if(correctans===allContestants[plr].answer)
        {
           fill("green")
           textSize(20)
           text(allContestants[plr].name,200,300);
           text(allContestants[plr].answer,200,320);
           
        }
            else
           {
           fill("red")
           textSize(20)
           text(allContestants[plr].name,200,340);
           text(allContestants[plr].answer,200,360);
           }
      }
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
