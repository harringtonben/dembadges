"use strict";

let badges = [];

    $.ajax("https://teamtreehouse.com/benharrington.json").done((data)=>{
        badges = data.badges;
        printDom(badges);
    }).fail((error)=>{
        console.log(error);
    });

const getBadges = () => {
    return badges;
};

const printDom = (myBadges) => {
    let printString = "";
    for (let i=0; i < myBadges.length; i++) {
        myBadges[i].newId = i;
        printString += `<div class="col-lg-2 badgeIcons animated wobble infinite" id="badgeme">
                            <img id="mybadge" src="${myBadges[i].icon_url}">
                        </div>`; 
    }  
    printToPage(printString);
};

const printToPage = (strang) => {
    $("#outputDiv").html(strang);
};

module.exports = {};