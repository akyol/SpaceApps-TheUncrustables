// Abraham Lee
// The Uncrustables
// SpaceApps 2019


// starts and sets up the game with an intro.
$(function () {
    $(".text-box").text(narrator.intro);
    sleep(7000).then(() => {
        questionTime();
    })
    
})

// loads the next set of questions, answer choices, and orbital debris to interacte with.
function questionTime() {
    $(".text-box").text(questions[counter]);
    $(".orbital-debris").attr("src", orbitalDebris[counter]);
    $(".selection-box").empty();
    $.each(answers[counter], function (index, value) {
        var question = answers[counter];
        var div = document.createElement("div");
        div.textContent = question[index]["message"];
        div.onclick = (function () {
            if (question[index]["correct"] == false) {
                var currVal = parseInt($(".progress-bar").attr("aria-valuenow"));
                $(".progress-bar").attr("aria-valuenow", currVal - 10);
            } else {
                currency += 1000;
            }
            if (counter == questions.length) {
                $(".text-box").text(narrator.end);
                $(".selection-box").empty();
                $(".orbital-debris").attr("src", "");
            } else {
                if (counter % 2 == 0) {
                    shopTime();
                } else {
                    questionTime();
                }
            }    
        });
        $(".selection-box").append(div);
    });
    counter++;
}

// Updates the game to Krimtrok's shop
function shopTime() {
    $(".text-box").text(shopkeeper.intro);
    $(".selection-box").empty();
    $(".orbital-debris").attr("src", "");

    // Set up items to shop and buy
    $.each(items, function (index, value) {
        var div = document.createElement("div");
        div.textContent = items[index]["name"] + "\t" + items[index]["price"] + "G";
        div.onclick = (function () {
            if (currency < items[index]["price"]) {
                $(".text-box").text(shopkeeper.unable);
            } else {
                $(".text-box").text(shopkeeper.thanks);
                currency -= items[index]["price"];
                var currVal = parseInt($(".progress-bar").attr("aria-valuenow"));
                $(".progress-bar").attr("aria-valuenow", currVal + items[index]["perk"]);
            }
        });
        $(".selection-box").append(div);
    });

    // set up leave shop
    var div = document.createElement("div");
    div.textContent = "Leave the shop";
    div.onclick = (function () {
        $(".text-box").text(shopkeeper.goodbye);
        sleep(3000).then(() => {    // there is no lock of buttons however
            $(".text-box").text(narrator.continue);
            $(".selection-box").empty();
            sleep(3000).then(() => {    // there is no lock of buttons however
                questionTime();
            })
        })
        
    });
    $(".selection-box").append(div);
}

// timer to wait and pause
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}