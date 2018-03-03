var Word = require ("./word.js");
var inquirer = require("inquirer");
var randomMovie = require("random-movie");

randomMovie(function(err, data){
    console.log(data);
})