// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        name: "Amirah Vann",
        photo: "https://twitter.com/amirahvann",
        scores: [5,3,4,2,1,2,2,5,1,3]
    },

    {
        name: "Angela Yee",
        photo: "https://rollingout.com/2016/03/31/angela-yee-responds-k-michelle/",
        scores: [5,2,4,2,3,1,2,2,5,5]
    },

    {
        name: "Jemelle Hill",
        photo: "https://cal.lmu.edu/event/an_evening_with_espns_jemele_hill",
        scores: [1,2,4,4,3,3,4,2,5,1]
    },

    {
        name: "Angela Rye",
        photo: "http://www.thedrumnewspaper.info/?p=13305",
        scores: [5,5,5,5,5,5,5,5,5,5]
    },

    {
        name: "Tamron Hall",
        photo: "https://twitter.com/tamronhall",
        scores: [5,5,5,5,5,5,5,5,5,5]
    },



  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;