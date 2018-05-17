// ============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// =============================================================================

var path = require("path");
var friendsList = require("../data/friends");

// =============================================================================
// ROUTING
// =============================================================================

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page
    // In each of the below cases the user is shown an HTML page of content
    // ------------------------------------------------------------------------

    app.get("/api/survey", function(req, res) {
        res.json(friendsList);
    });

    app.post("/api/complete", function(req, res) {
        friendsList.push(req.body);
        console.log(friendsList);
        res.json(friendsList);
    });
};