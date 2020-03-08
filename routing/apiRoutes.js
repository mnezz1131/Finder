// ===============================================================================
// LOAD DATA
// We are linking our routes to "data" sources.
// This data source holds json objects of information on friends-data,
// ===============================================================================
var friends = require("../app/data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var totalDifference = 0,
          bestmatch = {
          name: "",
          photo: "",
          friendDifference: 1000
      }
    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var b = userScores.map(function (item) {
      return parseInt(item, 10);
    })
    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    }
    console.log("Name: " + userName);
    console.log("User Score: " + userScores);

    var sum = b.reduce((a, b) => a + b, 0);
    console.log("Sum of Users Score: " + sum);
    console.log("Best Match friend diff: " + bestmatch.friendDifference);
    console.log("Name: " + userName);
    console.log("********************************************************");


    for (var i = 0; i < friends.length; i++) {
      console.log([friends[i].name]);
      totalDifference = 0;
      console.log("Total Diff " + totalDifference);
      console.log("Best Match friend diff: " + bestmatch.friendDifference);

      var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total friend score " + bfriendScore)
      totalDifference += Math.abs(sum - bfriendScore)
      console.log("-> " + totalDifference);

//If statement to determine best match for best friend
      if (totalDifference <= bestmatch.friendDifference) {
        bestmatch.name = friends[i].name;
        bestmatch.photo = friends[i].photo;
        bestmatch.friendDifference = totalDifference
      }
      console.log(totalDifference + " Total Difference")
    }

    console.log(bestmatch);
    friends.push(userData);
    console.log("New User Added");
    console.log(userData);
    res.json(bestmatch);




  });

}