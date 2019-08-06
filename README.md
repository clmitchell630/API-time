# Gif In A Jiff

Spend hours looking at random gifs and wonder where the time went with this web app!

## How to use

*   Click on any of the default buttons to generate 10 gifs pertaining to the button topic.
*   Click on the gifs to animate them, click them again to pause them.
*   In the "MORE GIFS!" seach form, enter a new topic then click the "Add New" button.
    -   A button will appear with the default buttons with your topic!
    -   Click the button and enjoy your gifs!

## Pseudo

*   Generate default topics as buttons
    -   When buttons are clicked, display 10 gifs using Giphy API.
*   Using a form input & .on("click"); function. When submit is pressed, do the following:
    -   Generate new button with styling and add topic as the button text.
    -   append the new button onto the default buttons.
    -   When clicked, the button should behave in the same way as the default buttons
*   When new button is clicked, prepend results so that previously generated gifs are below the new gifs.
*   Create toggle for the gifs.
    -   gifs default as still.
    -   When clicked, the gif will animate or be still dependant on what it was previously.