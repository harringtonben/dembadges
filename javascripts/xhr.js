"use strict";

let badges = [];

$.ajax("https://teamtreehouse.com/benharrington.json").done((data)=>{
    badges = data.badges;
    console.log(badges);
}).fail((error)=>{
    console.log(error);
});

module.exports = {};