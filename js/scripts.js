// business logic
var ages = ["<13", "13", "13-16", "17", "18+", "65+"];
var movieTitles = ["Jumanji", "Maze Runner", "The Post", "12 Strong", "A Beautiful Planet", "Paddington 2", "Phantom Thread"]
var showtimes = ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00"];
var theaterNames = ["CENTURY CLACKAMAS TOWN CENTER", "OAK GROVE 8 CINEMAS", "MORELAND THEATRE", "REGAL HILLTOP 9 CINEMA", "CENTURY 16 EASTPORT PLAZA"];
var ratings = ["G", "PG", "PG-13", "R", "NC-17", "X"];

function Movie(){
  this.name = name;
  this.rating = rating;
  this.long = long;
  this.short = short;
  this.release = release;
}

function Theater (){
  this.name = name;
  this.movies = movies;
  this.long = long;
  this.short = short;
  this.release = release;
}

Theater.prototype.canTheySeeIt = function(rating, age) {
  // ages = ["<13", "13", "13-16", "17", "18+", "65+"];
  // alert("Got here!");
  var canSee = true;
  if (age === "18+" || age === "65+") {
    canSee = true;
  }
  if ( (age === "17") && ( rating === "NC-17" || rating === "X" ) ) {
    canSee = false;
  }

  if ( (age === "13-16") && ( rating === "R" || rating === "NC-17" || rating === "X" ) ) {
    canSee = false;
  }

  if ( ( (age === "13") || (age === "<13") ) && ( rating === "PG-13" || rating === "R" || rating === "NC-17" || rating === "X" ) ) {
    canSee = false;
  }
  return canSee;
  }


function canTheySeeIt (rating, age) {
  // ages = ["<13", "13", "13-16", "17", "18+", "65+"];
  // alert("Got here!");
  var canSee = true;
  if (age === "18+" || age === "65+") {
    canSee = true;
  }
  if ( (age === "17") && ( rating === "NC-17" || rating === "X" ) ) {
    canSee = false;
  }

  if ( (age === "13-16") && ( rating === "R" || rating === "NC-17" || rating === "X" ) ) {
    canSee = false;
  }

  if ( ( (age === "13") || (age === "<13") ) && ( rating === "PG-13" || rating === "R" || rating === "NC-17" || rating === "X" ) ) {
    canSee = false;
  }
  return canSee;
}

function checkRatings(){
  for (i = 0; i < ratings.length; i++) {
    console.log("Rating: " + ratings[i]);
  }
}

function checkAges(){
  for (i = 0; i < ages.length; i++) {
    console.log("age: " + ages[i]);
  }
}

function checkRatingsAndAges() {
  for (i = 0; i < ratings.length; i++) {
    for (j = 0; j < ages.length; j++) {
      console.log("Age: " + ages[j] + " Rating: " + ratings[i] + ".");
    }
    // console.log("Rating: " + ratings[i]);
  }
}

function checkRatingsAndAgesToSee() {
  for (i = 0; i < ratings.length; i++) {
    for (j = 0; j < ages.length; j++) {
      console.log("Age: " + ages[j] + " Rating: " + ratings[i] + ".");
      if (canTheySeeIt(ratings[i], ages[j])) {
        console.log("They can see it!");
      } else {
        console.log("They can't see it!");
      }
    }
    // console.log("Rating: " + ratings[i]);
  }
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
}

function resetFields() {
    $('#formname')[0].reset(); // hash is form name
}

function showMovies(){
  // for (var i=0; i< movieTitles.length; i++){
  //   var x = movieTitles[i] +"<br>"
  //   // $("#movie").append(movieTitles[i]) + "<br>";
  //   $("#movie").append(x);
  //
  // }


  var movieTitlesOptions = "";
  var htmlString ="";
  for (var i=0; i< movieTitles.length; i++){
    movieTitlesOptions += "<option>" + movieTitles[i] +"</option>";
  }
  htmlString =  "<form name='showtimesChoice' id='showtimesChoice'>" +
                  "<select class='form-control' id='myShowtimes'>" +
                    movieTitlesOptions +
                  "</select>" +
                "</form>";
  $("#movie").append(htmlString);

}

function showAges(){
  var agesOptions = "";
  var htmlString ="";
  for (var i=0; i< ages.length; i++){
    agesOptions += "<option>" + ages[i] +"</option>";
  }
  htmlString =  "<form name='myAgesChoice' id='myAgesChoice'>" +
                  "<select class='form-control' id='myAges'>" +
                    agesOptions +
                  "</select>" +
                "</form>";
  $("#about").append(htmlString);
}

function showShowtimes(){
  var showtimesOptions = "";
  var htmlString ="";
  for (var i=0; i< showtimes.length; i++){
    showtimesOptions += "<option>" + showtimes[i] +"</option>";
  }
  htmlString =  "<form name='showtimesChoice' id='showtimesChoice'>" +
                  "<select class='form-control' id='myShowtimes'>" +
                    showtimesOptions +
                  "</select>" +
                "</form>";
  $("#showtimes").append(htmlString);
}

function showTheaterNames(){
  var theaterNamesOptions = "";
  var htmlString ="";
  for (var i=0; i< theaterNames.length; i++){
    theaterNamesOptions += "<option>" + theaterNames[i] +"</option>";
  }
  htmlString =  "<form name='theaterNamesChoice' id='theaterNamesChoice'>" +
                  "<select class='form-control' id='mytheaterNames'>" +
                    theaterNamesOptions +
                  "</select>" +
                "</form>";
  $("#theater").append(htmlString);
}

// htmlString =  "<form name='ageChoice' id='ageChoice'>" +
//                 "<select class='form-control' id='myAge'>" +
//                   "<option>Under 13</option>" +
//                   "<option>13 to 16</option>" +
//                   "<option>17</option>" +
//                   "<option>18 or older</option>" +
//                   "<option>Over 65</option>" +
//                 "</select>" +
//               "</form>";



// Movie panel
//
// on slection :
//
// change the theater
// get the theater's options (what movies it has, what show times it has)
//
// change the movie
// get the movies options (what theaters it's playing in, that theater's showtimes)








// user interface logic
  $(document).ready(function() {

    // alert("calling jQuery!");
    // alert("Ages: " + ages);
    // alert("Movie Titles: " + movieTitles);
    // alert("Showtimes:" + showtimes);
    // alert("theaterNames:" + theaterNames);
    // alert("ratings:" + ratings);


    $("#movie").html("<h3>" + movieTitles[0] +  "</h3>");
    $("#theater").html("<h3>" +theaterNames[0] +  "</h3>");
    // $("#about").html("<h3>" + ages[0] +  "</h3>");
    $("#showtimes").html("<h3>" + showtimes[0] +  "</h3>");
    var age = 13;
    var rating = "R";

    showMovies();
    showAges();
    showTheaterNames();
    showShowtimes();

      $(function() {
         $("#ageChoice select").change(function()
         {
             console.log("The select changed!");
             var inputAge = $("#myAge").val();
             console.log("Your age is: " + inputAge);
         });
      });

      $(function() {
         $("#myAgesChoice select").change(function()
         {
             console.log("The select changed!");
             var inputAge = $("#myAges").val();
             console.log("Your age is: " + inputAge);
         });
      });

      // $("#myAge").submit(function(event) {
    $("form#ageChoice").submit(function(event) {
      event.preventDefault();
      var inputAge = $("#myAge").val();
      alert("Got here!");
      console.log("Your age is: " + inputAge);
    });
      //
      //   resetFields();
      // });

    // $("#add-address").click(function() {
    //   newAddresses();
    // });
    //
    // $("form#new-contact").submit(function(event) {
    //   event.preventDefault();
    //   var inputtedFirstName = $("input#new-first-name").val();
    //   });
    //
    //   resetFields();
    // });
  });
