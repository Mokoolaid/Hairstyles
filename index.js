//Declaring array of hairstyles
var hairstyles = ["afro", "updo", "mohawk", "chignon"]

//Functions to create buttons populate ect:

function populateBtn() {
    //removing anything in the button and we want to add a button otherwise it will create a duplicate so if emptied then it will repopulate it with items in haristyles array
    $("#hairstyles-btn").empty()
    hairstyles.forEach(element => {
        var button = $("<button>")
        button.attr("class", "hairstyle-btn")
        button.text(element)
        $("#hairstyles-btn").append(button)

    });
}

//function to play or a srtill frame GIF Images

function displayGiph() {
    var name = $(this).attr("data-name")

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=HairStyles&apikey7q1zHp1SJhZjsopeU74JTrhL3IPNlws8limit=20");
    xhr.done(function (data) { console.log("success got data", data); });

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", still)
    }

}

$("#add-hairstyle").on("click", function (event) {
    event.preventDefault()
    var newHairStyle = $("#hairstyles-input").val().trim()
    hairstyles.push(newHairStyle)
    populateBtn()
    var type = $(this).attr("data-type");

})



hairstyles.forEach(element => {
    var button = $("<button>")
    button.attr("class", "hairstyle-btn")
    button.text(element)
    $("#hairstyles-btn").append(button)
});
populateBtn()