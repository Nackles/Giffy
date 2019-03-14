//MVP ACHIEVED

var topics = ['apex legends', 'league of legends', 'cats', 'salmon', 'visualizer', 'vr', 'augmented reality', 'magic the gathering', 'lost in space', 'dessert', 'bbq', 'roller coasters', 'cheese', 'potatoes', 'cheesy potatoes', 'swordfighting', 'cosmos', 'snow', 'mountains', 'skiing', 'cool tricks', '90s', 'vaporwave', 'eyes', 'eyebrows'];

createButtons();

//////////////////
//CREATE BUTTONS//
//////////////////
function createButtons() {
    console.log("create buttons triggered"); //function went

    $("#button-collector").empty(); //clear the buttons

    //loop through topics topic.length times and make a button for each entry
    for (var i = 0; i < topics.length; i++) {
        //OH MY GAH IT WORKED!!
        var newButton = $("<button/>", {
            text: topics[i],
            class: "btn btn-primary my-1",
            id: topics[i],
            click: function (event) { giphyCall(event) }
        });
        //collect the buttons
        $("#button-collector").append(newButton);
    }
}


///////////////////////////////////
//GRAB INPUT VALUE AND ADD BUTTON//
///////////////////////////////////
$("#search-grabe").on("click", function () {

    topics.push($("#search-form").val());
    createButtons();
    $("#search-form").val("");
})



///////////////////////////
//GET GIFS + DISPLAY THEM//
///////////////////////////
function giphyCall(event) {
    var searchFor = event.target.id; //get search term
    console.log(searchFor); //did it work

    var myAPI = "fpmcmDaPyMhRoYZdMK5FrTw9laKEKAWJ"; //unneccessary
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + myAPI + "&q=" + searchFor + "&limit=10&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // .then is our Promise => it is triggered on any response
        // pass in response as a parameter to capture the data obj returned
        .then(function (response) {
            console.log(response);
            $("#gif-collector").empty();
            for (let i = 0; i <= 9; i++) {
                //problem is somewhere below
                var aDiv = $("<div>")

                //constructing the imagetag
                var imageTag = $("<img>", {
                    src: response.data[i].images.fixed_height_small_still.url,
                    class: "p-3",
                    rating: response.data[i].rating,
                    still: response.data[i].images.fixed_height_small_still.url,
                    height: "250px",
                    width: "250px",
                    state: "still",
                    moving: response.data[i].images.fixed_height_small.url,
                    value: ("Rated " + response.data[i].rating),
                    alt: "gifferondo",
                    click: function (event) {
                        event.preventDefault();
                        var state = $(this).attr("state");
                        if (state === "still") {
                            $(this).attr("src", $(this).attr("moving"));
                            $(this).attr("state", "animate");
                            console.log("STILLED IMAGE");
                        } else {
                            $(this).attr("src", $(this).attr("still"));
                            $(this).attr("state", "still");
                            console.log("NOT");
                        }
                    }

                });

                //add the div to gif-collector, add image-tag to div, add rating text next to image
                $("#gif-collector").append(aDiv);
                aDiv.append(imageTag);
                aDiv.append(response.data[i].rating);

            }


        });
};