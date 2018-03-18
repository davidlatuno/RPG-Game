
function go() {

    var charmander = $("#start").prepend("<img class='pokemon charmander' src='assets/images/500px-004Charmander.png' alt='charmander'>");

    var squirtle = $("#start").prepend("<img class='pokemon squirtle' src='assets/images/500px-007Squirtle.png' alt='squirtle'>");

    var bulbasaur = $("#start").prepend("<img class='pokemon bulbasaur' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'>");

    var pikachu = $("#start").prepend("<img class='pokemon pikachu' src='assets/images/500px-025Pikachu.png' alt='pikachu'>");
}

function pikachu() {

    var charmander = $("#enemy").prepend("<img class='pokemon charmander' src='assets/images/500px-004Charmander.png' alt='charmander'>");

    var squirtle = $("#enemy").prepend("<img class='pokemon squirtle' src='assets/images/500px-007Squirtle.png' alt='squirtle'>");

    var bulbasaur = $("#enemy").prepend("<img class='pokemon bulbasaur' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'>");

}

function charmander() {

    var squirtle = $("#enemy").prepend("<img class='pokemon squirtle' src='assets/images/500px-007Squirtle.png' alt='squirtle'>");

    var bulbasaur = $("#enemy").prepend("<img class='pokemon bulbasaur' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'>");

    var pikachu = $("#enemy").prepend("<img class='pokemon pikachu' src='assets/images/500px-025Pikachu.png' alt='pikachu'>");


}

function squirtle() {

    var charmander = $("#enemy").prepend("<img class='pokemon charmander' src='assets/images/500px-004Charmander.png' alt='charmander'>");

    var bulbasaur = $("#enemy").prepend("<img class='pokemon bulbasaur' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'>");

    var pikachu = $("#enemy").prepend("<img class='pokemon pikachu' src='assets/images/500px-025Pikachu.png' alt='pikachu'>");


}

function bulbasaur() {

    var charmander = $("#enemy").prepend("<img class='pokemon charmander' src='assets/images/500px-004Charmander.png' alt='charmander'>");

    var squirtle = $("#enemy").prepend("<img class='pokemon squirtle' src='assets/images/500px-007Squirtle.png' alt='squirtle'>");

    var pikachu = $("#enemy").prepend("<img class='pokemon pikachu' src='assets/images/500px-025Pikachu.png' alt='pikachu'>");


}

function name() {

    $(".charmander").attr("data-pokename", "charmander");
    $(".bulbasaur").attr("data-pokename", "bulbasaur");
    $(".squirtle").attr("data-pokename", "squirtle");
    $(".pikachu").attr("data-pokename", "pikachu");

}

go();
name();

$(document).ready(function () {

    $("#start").on("click", ".pokemon", function () {


        $("#start").empty();

        $("#start").append(this);

        var pick = $(this).attr("data-pokename");

        if (pick === "pikachu") {

            pikachu();
        }

        if (pick === "charmander") {

            charmander();
        }

        if (pick === "bulbasaur") {

            bulbasaur();
        }

        if (pick === "squirtle") {

            squirtle();
        }
    })


})