var topics = ['apex legends', 'league of legends', 'cats', 'salmon', 'visualizer', 'vr', 'augmented reality', 'magic the gathering', 'lost in space', 'dessert', 'bbq', 'roller coasters', 'cheese', 'potatoes', 'cheesy potatoes', 'swordfighting', 'cosmos', 'snow', 'mountains', 'skiing', 'cool tricks', '90s', 'vaporwave', 'eyes', 'eyebrows'];

//variable to designate which column to deposit gifs into 
var colCurr = 0;

//each gif starts stopped, img.onclick != still

//function createButtons {
// function clear buttons
//loop to go through and create&append each button
//function createButtons() {
//     $("<button>") jQuery to make the button
//     .text(topic) instructions to change the text content
//     .addClass("topicButton") for formatting
//     .addClass("stopped")
//      (OR) Gif Area.onclick(get img id and change class to moving)
// }
//              when clicked    this          sends a question to giphy
// $(document).on("click", ".topicbuttons", giphyRing())

//onSUBMIT:
function createButtons() {

    //clear button-collector div
    $("buttons-collect").empty();

    //loop through topics topic.length times and make a button for each entry
    for (var i = 0; i < topics.length; i++) {
        var buttonTag = $("<button>");
        var buttonClickHandler = "#button-click";
        var buttonValue = i;

        $("buttons-collect").appendChild

    }

}

//button creation
//button <button> tag
//id generate-gif
//onclick event ajax query 



//onBUTTONCLICK
function gifRinger() {
    //takes arguments for topic
    //creates api url
    //pings ajax
    //then displays a 10-item selection in col1 OR carousel 1 (horizontal population might make more sense)
    //4-tick loop that cycles through columns to place new gifs in
    //each column could have a scrollbar
    //each item DISPLAYS ITS RATING
}


$("#button-click").on("click", function () {

    var myAPI = "fpmcmDaPyMhRoYZdMK5FrTw9laKEKAWJ";
    // api url
    // api is suppose to return a random search using cat as our search term
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + myAPI + "&tag=" + searchFor;

    //  jquery ajax call
    // url => url to hit
    // method => get request according to documentation
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // .then is our Promise => it is triggered on any response
        // pass in response as a parameter to capture the data obj returned
        .then(function (response) {

            // declare a variable and set it equal to the image uri using dot notation
            var imageUrl = response.data.image_original_url;

            // use jquery to dynamically create a html img element
            var imageTag = $("<img>");

            // reference catImage and use jquery attr method to add a value to the src attribute
            imageTag.attr("src", imageUrl);
            // reference catImage and use jquery attr method to add a value to the alt attribute
            imageTag.attr("alt", "gifferondo");

            // code for selecting the column
            if (colCurr >= 2) {
                colCurr = 0;
            }
            // HTMLtag variables
            // var imageTag = "<img>";
            // link from ajax
            // var imageLink = "do i even need this";
            // var thisRating = "rating from ajax call";

            // use jquery to select the div with id=images and use jquery .prepend method to render the catImage div we just created
            $("#images").prepend(imageTag);

            //runs after placement so correct selection is ready next time
            colCurr++;

        });
});