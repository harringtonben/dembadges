"use strict";

$("#drunkbadges").click(()=> {
        $("#outputDiv").addClass("animated lightSpeedOut");
        $("#drunkbadges").addClass("hidden");
        $("#bringmebadges").removeClass("hidden");
});

$("#bringmebadges").click(() => {
    $("body").css("background-image", `url("https://i.pinimg.com/originals/e5/52/af/e552af6f442d77724348f1125f412305.gif")`);
    $("#outputDiv").removeClass("lightSpeedOut");
    $("#outputDiv").addClass("zoomInDown");
    $("#zoeface").removeClass("hidden");
});

module.exports = {};