var charmander = $("#start").prepend("<img class='pokemon charmander' src='assets/images/500px-004Charmander.png' alt='charmander'>");

var squirtle = $("#start").prepend("<img class='pokemon squirtle' src='assets/images/500px-007Squirtle.png' alt='squirtle'>");

var bulbasaur = $("#start").prepend("<img class='pokemon bulbasaur' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'>");

var pikachu = $("#start").prepend("<img class='pokemon pikachu' src='assets/images/500px-025Pikachu.png' alt='pikachu'>");

function name() {

    $(".charmander").attr("data-pokename", "charmander");
    $(".bulbasaur").attr("data-pokename", "bulbasaur");
    $(".squirtle").attr("data-pokename", "squirtle");
    $(".pikachu").attr("data-pokename", "pikachu");

}

name();

$(document).ready(function() {

    $(".pokemon").on("click", function () {

        var pname = $(this).attr("data-pokename");

        console.log(pname);

    })


})