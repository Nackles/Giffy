var topics = ['apex legends', 'league of legends', 'cats', 'salmon', 'visualizer', 'vr', 'augmented reality', 'magic the gathering', 'lost in space', 'dessert', 'bbq', 'roller coasters', 'cheese', 'potatoes', 'cheesy potatoes', 'swordfighting', 'cosmos', 'snow', 'mountains', 'skiing', 'cool tricks', '90s', 'vaporwave', 'eyes', 'eyebrows'];

createButtons();

//////////////////
//CREATE BUTTONS//
//////////////////
function createButtons() {
    console.log("create buttons triggered"); //function went

    $("button-collector").empty(); //clear div

    //loop through topics topic.length times and make a button for each entry
    for (var i = 0; i < topics.length; i++) {
        //OH MY GAH IT WORKED!!
        var newButton = $("<button/>", {
            text: topics[i],
            class: "btn btn-primary my-1",
            id: topics[i],
            click: function (event) { giphyCall(event) }
        });
        $("#button-collector").append(newButton);
    }

    // var buttonTag = $("<button class='btn btn-primary'>");
    // var buttonText = topics[i];
    // toString(buttonText);
    // buttonTag.append(buttonText);
    // buttonTag.attr("data-name", topics[i]);

    // //YOU LEFT OFF HERE: TOPICS IS CORRECT, BUTTON TAG IS RETURNING OBJECT OBJECT
    // console.log(topics[i]);

    // $("#button-collector").append(buttonTag + "</button>");
}


////////////
//GET GIFS//
////////////
function giphyCall(event) {
    var searchFor = event.target.id; //get search term
    console.log(searchFor); //did it work

    var myAPI = "fpmcmDaPyMhRoYZdMK5FrTw9laKEKAWJ"; //unneccessary
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + myAPI + "&q=" + searchFor + "&limit=10&rating=PG&lang=en"

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // .then is our Promise => it is triggered on any response
        // pass in response as a parameter to capture the data obj returned
        .then(function (response) {
            var gifRating = response.rating;
            console.log(response);
            // declare a variable and set it equal to the image uri using dot notation
            var imageUrl = response.data.image_original_url;

            // use jquery to dynamically create a html img element
            var imageTag = $("<img>");

            // reference catImage and use jquery attr method to add a value to the src attribute
            imageTag.attr("src", imageUrl);
            // reference catImage and use jquery attr method to add a value to the alt attribute
            imageTag.attr("alt", "gifferondo");

            // use jquery to select the div with id=images and use jquery .prepend method to render the catImage div we just created
            $("#images").prepend(imageTag);

        });
};