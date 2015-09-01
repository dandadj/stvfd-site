// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var db = require('diskdb');
var cors = require('cors'); app.use(cors());

db = db.connect('./db', ['incidents']);
console.log("There are currently " + db.incidents.count() + " incidents in the DB")

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});

router.route('/incidents')

// create an incident (accessed at POST http://localhost:8080/api/incidents)
.post(function (req, res) {
        var new_id = 1;
        try{
            var all_incidents = db.incidents.find();
            if(all_incidents.length > 0) {
                var max_id = all_incidents.map(function(inc) {
                                        return(parseInt(inc.id));
                                    });
                new_id = Math.max.apply(Math, max_id) + 1;
            }
        }
        catch(error) {
            console.error(error);
        }

        var title = req.body.Title; // set the bears name (comes from the request)
        var description = req.body.Description;
        var date = req.body.Date;
        var units = req.body.Units;

        db.incidents.save({
            ID: new_id,
            Title: title,
            Description: description,
            Date: date,
            Units: units
        });
        res.json({
            message: "Incident added with id " + new_id,
            id: new_id
        })
    })
    .get(function (req, res) {
        var incidents = db.incidents.find();
        res.json(incidents);
    });

router.route('/incidents/:incident_id')
    .get(function (req, res) {
        var incident = db.incidents.findOne({"id":req.params.incident_id});
        res.json(incident);
    });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);