//Initialize
//  default buttons available and ready to be clicked
//  when user inputs new gif search, new button is created and added to the buttons list
//  when button is clicked. API call to giphy to pull out gifs with defined parameters.
//      parameters: max of 10 gifs returned, rating included.
//  gifs that are called need to be default still, when user toggles the gif, the gif animates.

//------code------
$(function () {
    //buttons
    var topics = ["Cats", "Ducks", "Mangos", "Ryan Gosling", "Will Ferrell", "Pharrell Williams", "Prickly Pear", "Red Panda", "Sneeze", "Laughing"];

    topicButtons();
    //------functions------
    function topicButtons(){
        for(var i = 0; i < topics.length; i++){
            var newBtn = $("<button>");
            newBtn.attr("type", "button");
            newBtn.addClass("btn btn-secondary");
            newBtn.text(topics[i]);
            $("#gifBtns").append(newBtn);
        }
    }

    function growTopics(event) {
        event.preventDefault();

        var newTopic = $("#topic-search").val().trim();
        
    }
});