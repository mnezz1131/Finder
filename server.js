// Dependencies
// ===========================================================
var express = require("express");
var app = express();  //The app.get function creates a route that accepts GET requests
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlroutes")(app);



// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });