var counter = 0;

var currency = 0;

var questions = ["You have encountered Titanium Satellite. What will you do?",
                "You have encountered Fiberglass Satellite. What will you do?",
                "You have encountered Super Gold Satellite. What will you do?",
                "DANGER!!! You have encountered Elon Musk's Space Roadster! What will you do?"];

var answers = [
    [
        {
            "message": "tammy",
            "correct": true
        },
        {
            "message": "Yell at the Titanium Satellite to go away.",
            "correct": false
        }
    ],
    [
        {
            "message": "Grab a hammer and try to smash the Fiberglass Satellite",
            "correct": false
        },
        {
            "message": "Nah",
            "correct": true
        }
    ],
    [
        {
            "message": "Try to rip a piece off of it to keep as a souvenir.",
            "correct": false
        },
        {
            "message": "",
            "correct": true
        }
    ],
    [
        {
            "message": "",
            "correct": true
        },
        {
            "message": "Get in the roadster to attempt to drive in space.",
            "correct": false
        }
    ]
];

var narrator = {
    "intro": "Hey adventurer! Are you ready to protect the Earth's ozone layer from orbital debris?" + 
             "\nChoose the right actions to deal with the scrap metals and win the game. Let's start this!",
    "continue": "Let's jump right back in!",
    "end": "Congratulations! You have protected the Earth's ozone layer!"
}

var shopkeeper = {
    "intro": "Welcome to my shop! What would you like to buy?",
    "unable": "Sorry. You don't have enough ",
    "thanks": "Thanks for your patronage!",
    "goodbye": "Seeya! Kick them metal scraps!"
}

var items = [
    {
        "name": "Super Growing Tree Power",
        "detail": "Restore 10 Ozone Layer Points",
        "price": 1000,
        "perk": 10
    }
]

var orbitalDebris = ["img/Delta_II.png",
                    "img/Satellite_type_1.png",
                    "img/Satellite_type_2.png",
                    "img/RoadsterInSpace.png"];