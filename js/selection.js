// Abraham Lee
// The Uncrustables
// SpaceApps 2019


// starts and sets up the game with an intro.
$(function () {
    // $('#myAudio').play();
    $(".speech-bubble").text(narrator.intro);
    hideBox();
    sleep(8000).then(() => {
        questionTime();
        showBox();
    })
})

function result() {
    $(".speech-bubble").text(narrator.end);
    $(".radiob").empty();
    $(".orbital-debris").attr("src", "");
    hideBox();
    sleep(4000).then(() => {
        var currVal = parseInt($(".progress-bar").attr("aria-valuenow"));
        if (currVal < 100) {
            $(".speech-bubble").text(narrator["badResult"]);
            var link = document.createElement('a');
            link.href = 'https://orbitaldebris.jsc.nasa.gov/faq/#';
            link.textContent = "Link";
            $(".speech-bubble").append(link);
        } else {
            $(".speech-bubble").text(narrator["goodResult"]);
            sleep(3000).then(() => {
                $(".orbital-debris").attr("src", "img/VictoryShip.png");
            })
        }
    })
}

// loads the next set of questions, answer choices, and orbital debris to interacte with.
function questionTime() {
    $(".speech-bubble").text(questions[counter]);
    $(".orbital-debris").attr("src", orbitalDebris[counter]);
    $(".radiob").empty();
    $.each(answers[counter], function (index, value) {
        var question = answers[counter];
        var div = document.createElement("div");
        div.textContent = question[index]["message"];
        div.onclick = (function () {
            if (question[index]["correct"] == false) {
                var currVal = parseInt($(".progress-bar").attr("aria-valuenow")) - 20;
                $(".progress-bar").attr("aria-valuenow", currVal);
                $(".progress-bar").css("width", currVal + "%");
            } else {
                currency += 1000;
                $("#currency").text(currency + "C");
            }
            if (counter == questions.length) {
                result();
                
            } else {
                if (counter % 2 == 0) {
                    shopTime();
                } else {
                    questionTime();
                }
            }    
        });
        $(".radiob").append(div);
    });
    counter++;
}

// Updates the game to Krimtrok's shop
function shopTime() {
    // document.body.style.backgroundImage = "url('img/Shop_Background.png')";
    $('#pixelFrame').css('background-image', "url('img/Shop_Background2.png')");
    $(".speech-bubble").text(shopkeeper.intro);
    $(".radiob").empty();
    $(".orbital-debris").attr("src", "");

    // Set up items to shop and buy
    $.each(items, function (index, value) {
        var div = document.createElement("div");
        div.textContent = items[index]["name"] + "\t" + items[index]["price"] + "C";
        div.onclick = (function () {
            if (currency < items[index]["price"]) {
                $(".speech-bubble").text(shopkeeper.unable);
            } else {
                $(".speech-bubble").text(shopkeeper.thanks);
                currency -= items[index]["price"];
                $("#currency").text(currency + "C");
                var currVal = parseInt($(".progress-bar").attr("aria-valuenow")) + items[index]["perk"];
                $(".progress-bar").attr("aria-valuenow", currVal);
                $(".progress-bar").css("width", currVal + "%");
            }
        });
        $(".radiob").append(div);
    });

    // set up leave shop
    var div = document.createElement("div");
    div.textContent = "Leave the shop";
    div.onclick = (function () {
        $(".speech-bubble").text(shopkeeper.goodbye);
        sleep(3000).then(() => {    // there is no lock of buttons however
            $(".speech-bubble").text(narrator.continue);
            $('#pixelFrame').css('background-image', "url('img/Space_Background2.png')");
            $(".radiob").empty();
            hideBox();
            sleep(3000).then(() => {    // there is no lock of buttons however
                questionTime();
                showBox();
            })
        })
        
    });
    $(".radiob").append(div);
}

// timer to wait and pause
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function hideBox() {
    $(".radiob").hide();
}

function showBox() {
    $(".radiob").show();
}