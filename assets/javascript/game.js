var pikaHealth = 100;

var charHealth = 100;

var squirHealth = 100;

var bulbHealth = 100;

var pikaPick = false;

var charPick = false;

var squirPick = false;

var bulbPick = false;

var pikaDefend = false;

var charDefend = false;

var squirDefend = false;

var bulbDefend = false;

var pickStart = true;

var pickDefend = true;

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

    pikaPick = !pikaPick;

}

function charmander() {

    var squirtle = $("#enemy").prepend("<img class='pokemon squirtle' src='assets/images/500px-007Squirtle.png' alt='squirtle'>");

    var bulbasaur = $("#enemy").prepend("<img class='pokemon bulbasaur' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'>");

    var pikachu = $("#enemy").prepend("<img class='pokemon pikachu' src='assets/images/500px-025Pikachu.png' alt='pikachu'>");

    charPick = !charPick;

}

function squirtle() {

    var charmander = $("#enemy").prepend("<img class='pokemon charmander' src='assets/images/500px-004Charmander.png' alt='charmander'>");

    var bulbasaur = $("#enemy").prepend("<img class='pokemon bulbasaur' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'>");

    var pikachu = $("#enemy").prepend("<img class='pokemon pikachu' src='assets/images/500px-025Pikachu.png' alt='pikachu'>");

    squirPick = !squirPick;
}

function bulbasaur() {

    var charmander = $("#enemy").prepend("<img class='pokemon charmander' src='assets/images/500px-004Charmander.png' alt='charmander'>");

    var squirtle = $("#enemy").prepend("<img class='pokemon squirtle' src='assets/images/500px-007Squirtle.png' alt='squirtle'>");

    var pikachu = $("#enemy").prepend("<img class='pokemon pikachu' src='assets/images/500px-025Pikachu.png' alt='pikachu'>");

    bulbPick = !bulbPick;

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

        if (pickStart) {

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

            $("#yours").html("Your Character");

            pickStart = !pickStart;
        }
    })

    $("#enemy").on("click", ".pokemon", function () {

        if (pickDefend) {

            $("#defend").append(this);

            var pick = $(this).attr("data-pokename");

            if (pick === "pikachu") {

                pikaDefend = !pikaDefend;
            }

            if (pick === "charmander") {

                charDefend = !charDefend;
            }

            if (pick === "bulbasaur") {

                bulbDefend = !bulbDefend;
            }

            if (pick === "squirtle") {

                squirDefend = !squirDefend;
            }

            pickDefend = !pickDefend;
        }

        console.log(charDefend);

    })

    $("#attack").on("click", function() {




    })




})