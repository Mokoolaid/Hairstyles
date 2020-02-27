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

//function to play or a still frame GIF Images

$("#add-hairstyle").on("click", function (event) {
    event.preventDefault()
    var newHairStyle = $("#hairstyles-input").val().trim()
    hairstyles.push(newHairStyle)
    populateBtn()

    var type = $(this).attr("data-type");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=HairStyles&apikey=7q1zHp1SJhZjsopeU74JTrhL3IPNlws8&limit=20";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.data;
        console.log(results)

        //make a div

        //put an image tag  in it
        const imgTag = $("<img>");
        imgTag.attr("src", "https://media1.giphy.com/media/CC7nfwnPWIoBa/giphy_s.gif?cid=e3b0c4426073c8ddccbdc72561bcca4da824bbd11cde01b2&rid=giphy_s.gif");




        $("#hairstyles").append(imgTag)

        //put a p tag with the rating in the div

        //append the div tag to page

        $("<img>").imgTag("data-type");


        // var animated = results["afro"].images.fixed_height.url;
        // var still = results["afro"].images.fixed_height_still.url

        /*var hairStyleImage = $("<img>");
        hairStyleImage.attr("src, still")
        hairStyleImage.attr("data-still", still);
        hairStyleImage.attr("data-animate", animated);
        hairStyleImage.attr("data-state", "still");
        hairStyleImage.addClass("hairStyle-image");
    
        hairStyleDiv.append(p);
        hairStyleDiv.append(hairStyle - image)
        $("#hairstyles").append("hairstyle-btn")
    });
    
    hairstyles.forEach(element => {
        var button = $("<button>")
        button.attr("class", "hairstyle-btn")
        button.text(element)
        $("hairstyles-btn").append(button)
    }
    
    );
    });*/

    });

});

populateBtn()
