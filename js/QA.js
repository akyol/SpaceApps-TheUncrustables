var counter = 0;

var currency = 0;

var questions = ["You have encountered Titanium Satellite Orbital Debris. It's heading" + 
                " straight for Earth! What will you do?",
                "You have encountered Fiberglass Satellite Orbital Debris. Watch out! It's" + 
                " shattered and very sharpWhat will you do?",
                "You have encountered Super Gold Satellite Orbital Debris. All that gold" +
                " is somewhat tempting. What will you do?",
                "DANGER!!! You have encountered the scraps of Elon Musk's Space Roadster! " + 
                "There is a large amount of Lithium-Ion. What will you do?"];

var answers = [
    [
        {
            "message": "Fire lasers at the Titanium Satellite",
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
            "message": "Release nets to grab all the Fiberglass drifitng in space.",
            "correct": true
        }
    ],
    [
        {
            "message": "Try to rip a piece off to keep as a space souvenir.",
            "correct": false
        },
        {
            "message": "Place the gold chunks in a space heater to melt it down to pure gold blocks.",
            "correct": true
        }
    ],
    [
        {
            "message": "Send robots to retrieve the batteries back to Space HQ.",
            "correct": true
        },
        {
            "message": "Get in the roadster to attempt to drive in space.",
            "correct": false
        }
    ]
];

var narrator = {
    "intro": "Hey adventurer! Are you ready to protect Earth's ozone layer from orbital debris?" + 
             " Choose the right actions to deal with the scrap metals and win the game. Let's start this!",
    "continue": "Let's jump right back in!",
    "end": "Congratulations! You have protected the Earth's ozone layer!",
    "goodResult": "Amazing! You are well on your way to preserving the Earth and its ozone layer along" +
                    " with space exploration! We made something for you with all the orbital debris you collected.",
    "badResult": "You managed to survive but you're not quite there yet. I recommend you to find" +
                " out more about orbital debris. Follow this site:"
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