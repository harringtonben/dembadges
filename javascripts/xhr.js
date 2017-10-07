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
    myBadges.forEach((badge)=> {
        printString += `<div class="badgeIcons col-md-3">
                            <img src="${badge.icon_url}">
                        </div>`;
    });
    printToPage(printString);
};

const printToPage = (strang) => {
    $("#outputDiv").html(strang);
};

module.exports = {};