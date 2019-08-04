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
    //initialize buttons
    for (var i = 0; i < topics.length; i++) {
        addButton(topics[i]);
    }
    //add topic button
    $("#topic-add").on("click", growTopics);

    //------functions------
    function addButton(name) {

        var newBtn = $("<button>");
        newBtn.attr("type", "button");
        newBtn.addClass("btn btn-secondary addBtnStyle");
        newBtn.text(name);
        $("#gifBtns").append(newBtn);
        $(newBtn).on("click", getGif);

    }

    function growTopics(event) {

        event.preventDefault();

        var newTopic = $("#topic-search").val().trim();
        topics.push(newTopic);

        addButton(newTopic);

        $("#topic-search").val("");

    }

    function getGif() {

        var gifTopic = $(this).text();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            gifTopic + "&api_key=9dffnf22zOjtVp4Y7PhLeiTV3bf0mYUN&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var p = $("<div>").addClass("ratingStyle").text("Rated: " + results[i].rating);

                //setting up the gif image element
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height_still.url);
                gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                gifImage.attr("data-animate", results[i].images.fixed_height.url);
                gifImage.attr("data-state", "still");
                gifImage.addClass("gif");

                gifDiv.addClass("imageStyle");
                gifDiv.append(p);
                gifDiv.append(gifImage);

                $(gifImage).on("click", gifToggle);
                $("#gifGoHere").prepend(gifDiv);
            }

        });

    }

    function gifToggle() {

        var gifState = $(this).attr("data-state");
        console.log("The gif is: " + gifState);

        if (gifState === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }

        if (gifState === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

    }
});