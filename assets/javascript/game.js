var pikaHealth = 100;

var charHealth = 120;

var squirHealth = 150;

var bulbHealth = 180;

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

    var charmander = $("#start").prepend("<div class='health charmander'><img class='pokemon' src='assets/images/500px-004Charmander.png' alt='charmander'><br><div id='charHealth'>HP:120</div></div>");

    var squirtle = $("#start").prepend("<div class='health squirtle'><img class='pokemon' src='assets/images/500px-007Squirtle.png' alt='squirtle'><br><div id='squirHealth'>HP:150</div></div>");

    var bulbasaur = $("#start").prepend("<div class='health bulbasaur'><img class='pokemon' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'><br><div id='bulbHealth'>HP:180</div></div>");

    var pikachu = $("#start").prepend("<div class='health pikachu'><img class='pokemon' src='assets/images/500px-025Pikachu.png' alt='pikachu'><br><div id='pikaHealth'>HP:100</div></div>");
}

function pikachu() {

    var charmander = $("#enemy").prepend("<div class='health charmander'><img class='pokemon' src='assets/images/500px-004Charmander.png' alt='charmander'><br><div id='charHealth'>HP:120</div></div>");

    var squirtle = $("#enemy").prepend("<div class='health squirtle'><img class='pokemon' src='assets/images/500px-007Squirtle.png' alt='squirtle'><br><div id='squirHealth'>HP:150</div></div>");

    var bulbasaur = $("#enemy").prepend("<div class='health bulbasaur'><img class='pokemon' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'><br><div id='bulbHealth'>HP:180</div></div>");

    pikaPick = !pikaPick;

}

function charmander() {

    var squirtle = $("#enemy").prepend("<div class='health squirtle'><img class='pokemon' src='assets/images/500px-007Squirtle.png' alt='squirtle'><br><div id='squirHealth'>HP:150</div></div>");

    var bulbasaur = $("#enemy").prepend("<div class='health bulbasaur'><img class='pokemon' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'><br><div id='bulbHealth'>HP:180</div></div>");

    var pikachu = $("#enemy").prepend("<div class='health pikachu'><img class='pokemon' src='assets/images/500px-025Pikachu.png' alt='pikachu'><br><div id='pikaHealth'>HP:100</div></div>");

    charPick = !charPick;

}

function squirtle() {

    var charmander = $("#enemy").prepend("<div class='health charmander'><img class='pokemon' src='assets/images/500px-004Charmander.png' alt='charmander'><br><div id='charHealth'>HP:120</div></div>");

    var bulbasaur = $("#enemy").prepend("<div class='health bulbasaur'><img class='pokemon' src='assets/images/500px-001Bulbasaur.png' alt='bulbasaur'><br><div id='bulbHealth'>HP:180</div></div>");

    var pikachu = $("#enemy").prepend("<div class='health pikachu'><img class='pokemon' src='assets/images/500px-025Pikachu.png' alt='pikachu'><br><div id='pikaHealth'>HP:100</div></div>");

    squirPick = !squirPick;
}

function bulbasaur() {

    var charmander = $("#enemy").prepend("<div class='health charmander'><img class= 'pokemon' src='assets/images/500px-004Charmander.png' alt='charmander'><br><div id='charHealth'>HP:120</div></div>");

    var squirtle = $("#enemy").prepend("<div class='health squirtle'><img class='pokemon' src='assets/images/500px-007Squirtle.png' alt='squirtle'><br><div id='squirHealth'>HP:150</div></div>");

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

                charHealth = charHealth - 16;
                squirHealth = squirHealth - (7 * charAttack);

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
                bulbHealth = bulbHealth - (7 * charAttack);

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

                charHealth = charHealth - 12;
                pikaHealth = pikaHealth - (7 * charAttack);

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

                squirHealth = squirHealth - 7;
                charHealth = charHealth - (6 * squirAttack);

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

                squirHealth = squirHealth - 20;
                bulbHealth = bulbHealth - (6 * squirAttack);

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

                squirHealth = squirHealth - 12;
                pikaHealth = pikaHealth - (6 * squirAttack);

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

            // Bulbasaur Picked
            if (bulbPick && squirDefend) {

                bulbAttack++

                bulbHealth = bulbHealth - 8;
                squirHealth = squirHealth - (4 * bulbAttack);

                $("#bulbHealth").text("HP: " + bulbHealth);
                $("#squirHealth").text("HP: " + squirHealth);

                if (squirHealth <= 0) {

                    winCount++;

                    $("#defend").empty();

                    pickDefend = !pickDefend;

                    squirDefend = !squirDefend;

                    if (winCount === 3 && bulbHealth > 0) {
                        alert("YOU WIN!");
                    }
                }

                if (bulbHealth <= 0) {

                    alert("YOU LOSE");

                    attackBool = !attackBool;
                }


            }

            if (bulbPick && charDefend) {

                bulbAttack++

                bulbHealth = bulbHealth - 19;
                charHealth = charHealth - (4 * bulbAttack);

                $("#charHealth").text("HP: " + charHealth);
                $("#bulbHealth").text("HP: " + bulbHealth);

                if (charHealth <= 0) {

                    winCount++

                    $("#defend").empty();

                    pickDefend = !pickDefend;

                    charDefend = !charDefend;

                    if (winCount === 3 && bulbHealth > 0) {
                        alert("YOU WIN!");
                    }
                }

                if (bulbHealth <= 0) {

                    alert("YOU LOSE");

                    attackBool = !attackBool;
                }

            }

            if (bulbPick && pikaDefend) {

                bulbAttack++

                bulbHealth = bulbHealth - 13;
                pikaHealth = pikaHealth - (4 * bulbAttack);

                $("#bulbHealth").text("HP: " + bulbHealth);
                $("#pikaHealth").text("HP: " + pikaHealth);

                if (pikaHealth <= 0) {

                    winCount++;

                    $("#defend").empty();

                    pickDefend = !pickDefend;

                    pikaDefend = !pikaDefend;

                    if (winCount === 3 && bulbHealth > 0) {
                        alert("YOU WIN!");
                    }
                }

                if (bulbHealth <= 0) {

                    alert("YOU LOSE");

                    attackBool = !attackBool;
                }

            }

            // Pikachu Picked
            if (pikaPick && squirDefend) {

                pikaAttack++

                pikaHealth = pikaHealth - 10;
                squirHealth = squirHealth - (5 * pikaAttack);

                $("#pikaHealth").text("HP: " + pikaHealth);
                $("#squirHealth").text("HP: " + squirHealth);

                if (squirHealth <= 0) {

                    winCount++;

                    $("#defend").empty();

                    pickDefend = !pickDefend;

                    squirDefend = !squirDefend;

                    if (winCount === 3 && pikaHealth > 0) {
                        alert("YOU WIN!");
                    }
                }

                if (pikaHealth <= 0) {

                    alert("YOU LOSE");

                    attackBool = !attackBool;
                }


            }

            if (pikaPick && bulbDefend) {

                pikaAttack++

                pikaHealth = pikaHealth - 15;
                bulbHealth = bulbHealth - (5 * pikaAttack);

                $("#pikaHealth").text("HP: " + pikaHealth);
                $("#bulbHealth").text("HP: " + bulbHealth);

                if (bulbHealth <= 0) {

                    winCount++

                    $("#defend").empty();

                    pickDefend = !pickDefend;

                    bulbDefend = !bulbDefend;

                    if (winCount === 3 && pikaHealth > 0) {
                        alert("YOU WIN!");
                    }
                }

                if (pikaHealth <= 0) {

                    alert("YOU LOSE");

                    attackBool = !attackBool;
                }

            }

            if (pikaPick && charDefend) {

                pikaAttack++

                pikaHealth = pikaHealth - 5;
                charHealth = charHealth - (5 * pikaAttack);

                $("#charHealth").text("HP: " + charHealth);
                $("#pikaHealth").text("HP: " + pikaHealth);

                if (charHealth <= 0) {

                    winCount++;

                    $("#defend").empty();

                    pickDefend = !pickDefend;

                    charDefend = !charDefend;

                    if (winCount === 3 && pikaHealth > 0) {
                        alert("YOU WIN!");
                    }
                }

                if (pikaHealth <= 0) {

                    alert("YOU LOSE");

                    attackBool = !attackBool;
                }

            }


        }
    })
})