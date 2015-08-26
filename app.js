(function () {
    var app = angular.module('firePage', []);

    app.controller('IncidentController', function () {
        this.incidents = [
            {
                Title: "Incident 1",
                Description: "This was the first made up incident... that I made up. It has a slightly longer description than the other incidents.",
                Date: Date.parse("8/22/2015"),
                Units: ["E82", "TO88"],
                Pictures: ["images/incident1_1.jpg", "images/incident1_2.jpg"]
            },
            {
                Title: "Incident 2",
                Description: "This was the second made up incident... that I made up",
                Date: Date.parse("8/20/2015"),
                Units: ["E82", "TO88", "E81"],
                Pictures: ["images/incident2_1.jpg"]
            },
            {
                Title: "Incident 3",
                Description: "This was a boring call",
                Date: Date.parse("8/17/2015"),
                Units: ["C89"],
                Pictures: []
            }
        ];
    });

    app.controller('NavController', function () {
        this.activeTab = 3;

        this.setTab = function (i) {
            this.activeTab = i;
        };

        this.isSet = function (tabName) {
            return this.activeTab === tabName;
        };

        this.apparatus = [
            {
                Name: "Engine 81",
                Description: "This is Engine 81, it usually runs second due.",
                MainPicture: "images/engine81.jpg",
                SubPictures: ["images/engine81-side.jpg", "images/engine81-station.jpg"]
            },
            {
                Name: "Tower 88",
                Description: "This is Tower 88, it is getting replaced soon.",
                MainPicture: "images/tower88-leftside.jpg",
                SubPictures: ["images/tower88-front.jpg", "images/tower88-back.jpg"]
            }
        ];

        this.template = {
            name: 'apparatus-card.html',
            url: 'templates/apparatus-card.html'
        };

        this.alert = function (text) {
            alert(text);
        };
    });

    app.controller('CrewsController', function () {
        this.CrewInfo = [
            {
                Name: "A",
                Night: "Sunday",
                Captain: "Yousef Shakhsheer",
                Roster: [
                    {
                        Name: "Yousef Shakhsheer",
                        Rank: "Captain"
                    },
                    {
                        Name: "Clayton Geipel",
                        Rank: "Firefighter"
                    }
                    ]
            },
            {
                Name: "B",
                Night: "Monday",
                Captain: "Erik Larson",
                Roster: [
                    {
                        Name: "Erik Larson",
                        Rank: "Captain"
                    },
                    {
                        Name: "Todd Cosgrove",
                        Rank: "Lieutenant"
                    },
                    {
                        Name: "Brannon Johnson",
                        Rank: "Firefighter"
                    }
                    ]
            },
            {
                Name: "E",
                Night: "Thursday",
                Captain: "Danny Brady",
                Roster: [
                    {
                        Name: "Danny Brady",
                        Rank: "Captain"
                    },
                    {
                        Name: "Trevor Varner",
                        Rank: "Lieutenant"
                    },
                    {
                        Name: "Sarah Kelley",
                        Rank: "Firefighter"
                    },
                    {
                        Name: "Kyle Tatton",
                        Rank: "Firefighter"
                    },
                    {
                        Name: "Neal Rose",
                        Rank: "Rookie"
                    }
                       ]
            }
        ];
    });

    app.controller('PhotoController', function () {
        this.OpenModal = function(modalID) {
            $("#" + modalID).openModal();
        };
        
        this.Gallery = [
            {
                Title: "Woodlands",
                CoverPicture: "images/Woodlands/1.jpg",
                SubPictures: ["images/Woodlands/1.jpg", "images/Woodlands/2.jpg"]
            },
            {
                Title: "TurtleCreek",
                CoverPicture: "images/TurtleCreek/1.jpg",
                SubPictures: ["images/TurtleCreek/1.jpg"]
            }
        ];
    });

})();