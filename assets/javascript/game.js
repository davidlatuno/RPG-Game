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

var attackBool = true;

var charAttack = 0;

var squirAttack = 0;

var bulbAttack = 0;

var pikaAttack = 0;

var winCount = 0;

function go() {

    var charmander = $("#start").prepend("<div class='health charmander'><img class='pokemon' src='assets/images/500px-004Charmander.png' alt='charmander'><br><div id='charHealth'>HP:100</div></div>");

    var squirtle = $("#start").prepend("<div class='health squirtle'><img class='pokemon' src='assets/images/500px-007Squirtle.png' alt='squirtle'><br><div id='squirHealth'>HP:100</div></div>");

    var bulbasaur = $("#start").prepend("<div class='health bulbasaur'><img class='pokemon' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'><br><div id='bulbHealth'>HP:100</div></div>");

    var pikachu = $("#start").prepend("<div class='health pikachu'><img class='pokemon' src='assets/images/500px-025Pikachu.png' alt='pikachu'><br><div id='pikaHealth'>HP:100</div></div>");
}

function pikachu() {

    var charmander = $("#enemy").prepend("<div class='health charmander'><img class='pokemon' src='assets/images/500px-004Charmander.png' alt='charmander'><br><div id='charHealth'>HP:100</div></div>");

    var squirtle = $("#enemy").prepend("<div class='health squirtle'><img class='pokemon' src='assets/images/500px-007Squirtle.png' alt='squirtle'><br><div id='squirHealth'>HP:100</div></div>");

    var bulbasaur = $("#enemy").prepend("<div class='health bulbasaur'><img class='pokemon' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'><br><div id='bulbHealth'>HP:100</div></div>");

    pikaPick = !pikaPick;

}

function charmander() {

    var squirtle = $("#enemy").prepend("<div class='health squirtle'><img class='pokemon' src='assets/images/500px-007Squirtle.png' alt='squirtle'><br><div id='squirHealth'>HP:100</div></div>");

    var bulbasaur = $("#enemy").prepend("<div class='health bulbasaur'><img class='pokemon' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'><br><div id='bulbHealth'>HP:100</div></div>");

    var pikachu = $("#enemy").prepend("<div class='health pikachu'><img class='pokemon' src='assets/images/500px-025Pikachu.png' alt='pikachu'><br><div id='pikaHealth'>HP:100</div></div>");

    charPick = !charPick;

}

function squirtle() {

    var charmander = $("#enemy").prepend("<div class='health charmander'><img class='pokemon' src='assets/images/500px-004Charmander.png' alt='charmander'><br><div id='charHealth'>HP:100</div></div>");

    var bulbasaur = $("#enemy").prepend("<div class='health bulbasaur'><img class='pokemon' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'><br><div id='bulbHealth'>HP:100</div></div>");

    var pikachu = $("#enemy").prepend("<div class='health pikachu'><img class='pokemon' src='assets/images/500px-025Pikachu.png' alt='pikachu'><br><div id='pikaHealth'>HP:100</div></div>");

    squirPick = !squirPick;
}

function bulbasaur() {

    var charmander = $("#enemy").prepend("<div class='health charmander'><img class= 'pokemon' src='assets/images/500px-004Charmander.png' alt='charmander'><br><div id='charHealth'>HP:100</div></div>");

    var squirtle = $("#enemy").prepend("<div class='health squirtle'><img class='pokemon' src='assets/images/500px-007Squirtle.png' alt='squirtle'><br><div id='squirHealth'>HP:100</div></div>");

    var pikachu = $("#enemy").prepend("<div class='health pikachu'><img class='pokemon' src='assets/images/500px-025Pikachu.png' alt='pikachu'><br><div id='pikaHealth'>HP:100</div></div>");

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

    $("#start").on("click", ".health", function () {

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

    $("#enemy").on("click", ".health", function () {

        name();

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

    })

    $("#attack").on("click", function () {

        if (attackBool) {

            // Charmander Picked
            if (charPick && squirDefend) {

                charAttack++

                charHealth = charHealth - 15;
                squirHealth = squirHealth - (5 * charAttack);

                $("#charHealth").text("HP: " + charHealth);
                $("#squirHealth").text("HP: " + squirHealth);

                if (squirHealth <= 0) {

                    winCount++;

                    $("#defend").empty();

                    pickDefend = !pickDefend;

                    squirDefend = !squirDefend;

                    if (winCount === 3 && charHealth > 0) {
                        alert("YOU WIN!");
                    }
                }

                if (charHealth <= 0) {

                    alert("YOU LOSE");

                    attackBool = !attackBool;
                }


            }

            if (charPick && bulbDefend) {

                charAttack++

                charHealth = charHealth - 5;
                bulbHealth = bulbHealth - (5 * charAttack);

                $("#charHealth").text("HP: " + charHealth);
                $("#bulbHealth").text("HP: " + bulbHealth);

                if (bulbHealth <= 0) {

                    winCount++

                    $("#defend").empty();

                    pickDefend = !pickDefend;

                    bulbDefend = !bulbDefend;

                    if (winCount === 3 && charHealth > 0) {
                        alert("YOU WIN!");
                    }
                }

                if (charHealth <= 0) {

                    alert("YOU LOSE");

                    attackBool = !attackBool;
                }

            }

            if (charPick && pikaDefend) {

                charAttack++

                charHealth = charHealth - 10;
                pikaHealth = pikaHealth - (5 * charAttack);

                $("#charHealth").text("HP: " + charHealth);
                $("#pikaHealth").text("HP: " + pikaHealth);

                if (pikaHealth <= 0) {

                    winCount++;

                    $("#defend").empty();

                    pickDefend = !pickDefend;

                    pikaDefend = !pikaDefend;

                    if (winCount === 3 && charHealth > 0) {
                        alert("YOU WIN!");
                    }
                }

                if (charHealth <= 0) {

                    alert("YOU LOSE");

                    attackBool = !attackBool;
                }

            }

            // Squirtle Picked

            if (squirPick && charDefend) {

                squirAttack++

                squirHealth = squirHealth - 5;
                charHealth = charHealth - (5 * squirAttack);

                $("#squirHealth").text("HP: " + squirHealth);
                $("#charHealth").text("HP: " + charHealth);

                if (charHealth <= 0) {

                    winCount++;

                    $("#defend").empty();

                    pickDefend = !pickDefend;

                    charDefend = !charDefend;

                    if (winCount === 3 && squirHealth > 0) {
                        alert("YOU WIN!");
                    }
                }

                if (squirHealth <= 0) {

                    alert("YOU LOSE");

                    attackBool = !attackBool;
                }


            }

            if (squirPick && bulbDefend) {

                squirAttack++

                squirHealth = squirHealth - 10;
                bulbHealth = bulbHealth - (5 * squirAttack);

                $("#squirHealth").text("HP: " + squirHealth);
                $("#bulbHealth").text("HP: " + bulbHealth);

                if (bulbHealth <= 0) {

                    winCount++

                    $("#defend").empty();

                    pickDefend = !pickDefend;

                    bulbDefend = !bulbDefend;

                    if (winCount === 3 && squirHealth > 0) {
                        alert("YOU WIN!");
                    }
                }

                if (squirHealth <= 0) {

                    alert("YOU LOSE");

                    attackBool = !attackBool;
                }

            }

            if (squirPick && pikaDefend) {

                squirAttack++

                squirHealth = squirHealth - 15;
                pikaHealth = pikaHealth - (5 * squirAttack);

                $("#squirHealth").text("HP: " + squirHealth);
                $("#pikaHealth").text("HP: " + pikaHealth);

                if (pikaHealth <= 0) {

                    winCount++;

                    $("#defend").empty();

                    pickDefend = !pickDefend;

                    pikaDefend = !pikaDefend;

                    if (winCount === 3 && squirHealth > 0) {
                        alert("YOU WIN!");
                    }
                }

                if (squirHealth <= 0) {

                    alert("YOU LOSE");

                    attackBool = !attackBool;
                }

            }


        }
    })
})