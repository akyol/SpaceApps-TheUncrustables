$(function () {
    // var choices;
    // alert(answers)
    // answers[counter].foreach(function() {

    // })
    // console.log(answers[0]);
    nextQuestion();
    nextAnswers();
})

function nextQuestion() {
    $("#text-box").text(questions[counter]);
}

function nextAnswers() {
    $("#selection-box").empty();
    $.each(answers[counter], function (index, value) {
        var question = answers[counter];
        // console.log('My array has at position ' + index + ', this value: ' + value);
        var div = document.createElement("div");
        div.textContent = question[index]["message"];
        div.onclick = (function () {
            if (question[index]["correct"] == false) {
                var currVal = parseInt($(".progress-bar").attr("aria-valuenow"));
                $(".progress-bar").attr("aria-valuenow", currVal - 10);
            }
            if (counter == questions.length) {
                alert("end time");
            } else {
                if (counter == questions.length / 2) {
                    shop
                    alert("shop time");
                }
                nextQuestion();
                nextAnswers();
            }
            
        });
        $("#selection-box").append(div);
        // document.body.appendChild(div);
    });
    counter++;
}