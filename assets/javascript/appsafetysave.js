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
        $("<button/>", {
            text: topics[i],
            id: "click_" + i,
            click: function () { }
        });

    for (i = 1; i <= 10; i++) {
        $('<button/>', {
            text: i, //set text 1 to 10
            id: 'btn_' + i,
            click: function () { alert('hi'); }
        });
    }




    var buttonTag = $("<button class='btn btn-primary'>");
    var buttonText = topics[i];
    toString(buttonText);
    buttonTag.append(buttonText);
    buttonTag.attr("data-name", topics[i]);

    //YOU LEFT OFF HERE: TOPICS IS CORRECT, BUTTON TAG IS RETURNING OBJECT OBJECT
    console.log(topics[i]);

    $("#button-collector").append(buttonTag + "</button>");
} 
}

////////////
//GET GIFS//
////////////
function giphyCall() {

    var searchFor = $("#search-form").val(); //get search term
    console.log("searchFor: " + searchFor); //did it work

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
                console.log("colCurr: " + colCurr);
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
};