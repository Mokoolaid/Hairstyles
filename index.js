var hairstyles = ["afro", "updo", "mohawk"]


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

$("#add-hairstyle").on("click", function (event) {
    event.preventDefault()
    var newHairStyle = $("#hairstyles-input").val().trim()
    hairstyles.push(newHairStyle)
    populateBtn()
})


populateBtn()