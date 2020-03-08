// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var friends = [
    {
        "name": "Jesse Pinkman",
        "photo": "https://pixelz.cc/wp-content/uploads/2017/12/breaking-bad-jesse-pinkman-uhd-4k-wallpaper-150x150.jpg",
        "scores": [
            5,
            1,
            1,
            4,
            2,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Walter White",
        "photo": "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2013/8/21/16/enhanced-buzz-1584-1377117473-16.jpg",
        "scores": [
            3,
            3,
            2,
            5,
            3,
            2,
            4,
            1,
            3,
            2
        ]
    },
    {
        "name": "Saul Goodman",
        "photo": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/38/383d17fa5af4f6cd692a14aa9a7893f2d02d20fd_full.jpg",
        "scores": [
            1,
            2,
            3,
            4,
            5,
            5,
            4,
            3,
            2,
            1        ]
    }
    {
        "name": "Tuco Salamanaca",
        "photo": "https://top-ten.tv/wp-content/uploads/2013/04/Tuco-Salamanca-300x145.png",
        "scores": [
            5,
            5,
            3,
            4,
            5,
            5,
            4,
            3,
            5,
            5       ]
    }

]



// // Note how we export the array. This makes it accessible to other files using require.
 module.exports = friends;
