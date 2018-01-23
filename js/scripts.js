// business logic
var ages = ["<13", "13", "13-16", "17", "18+", "65+"];
// var movieTitles = ["Jumanji", "Maze Runner", "The Post", "12 Strong", "A Beautiful Planet", "Paddington 2", "Phantom Thread"];
var movieTitles = [];
var showtimes = ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00"];
// var theaterNames = ["CENTURY CLACKAMAS TOWN CENTER", "OAK GROVE 8 CINEMAS", "MORELAND THEATRE", "REGAL HILLTOP 9 CINEMA", "CENTURY 16 EASTPORT PLAZA"];
var theaterNames = [];
var ratings = ["G", "PG", "PG-13", "R", "NC-17", "X"];
var allMovies = [];

function Ticket(movie, matineePrice, regularPrice, seniorPrice, seat){
  this.movie = movie; // the movie the ticket is for
  this.matineePrice = matineePrice; // matineePrice
  this.regularPrice = regularPrice; // regular price
  this.seniorPrice = seniorPrice; // senior discount price
  this.seat = seat; // are there reserved seats?
}


function Dog(name, colors, age) {
  this.name = name;
  this.colors = colors;
  this.age = age;
}


function Movie(name, rating, short, long, newRelease, theaters){
  this.name = name;
  this.rating = rating;
  this.short = short;
  this.long = long;
  this.newRelease = newRelease;  // boolean
  this.theaters = theaters; // array of Theaters it's playing
}

function Theater (name, movies, address, showtimes, matinees){
  this.name = name;
  this.movies = movies; // array of Movies playing here
  this.long = address; // theater name and address
  this.showtimes = showtimes; // showtimes from the Movies (can I do this???)   METHOD
  this.matinees = matinees; // does this movie have matinee times? Check the movie release METHOD
}

Movie.prototype.canTheySeeIt = function(rating, age) {
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


  function addMovieToList (name, rating, short, long, newRelease, theaters) { // input values from from somewhere
    var myMovie = new Movie(name, rating, short, long, newRelease, theaters);
    allMovies.push(myMovie);
    console.log("Added: " + myMovie.name);
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

// function showMovies(){
//   var movieTitlesOptions = "";
//   var htmlString ="";
//   for (var i=0; i< movieTitles.length; i++){
//     movieTitlesOptions += "<option>" + movieTitles[i] +"</option>";
//   }
//   htmlString =  "<form name='showtimesChoice' id='showtimesChoice'>" +
//                   "<select class='form-control' id='myShowtimes'>" +
//                     movieTitlesOptions +
//                   "</select>" +
//                 "</form>";
//   $("#movie").append(htmlString);
// }

function showMovies(){
  var movieTitlesOptions = "";
  var htmlString ="";
  for (var i=0; i< movieTitles.length; i++){
    movieTitlesOptions += "<option>" + movieTitles[i].name +"</option>";
  }
  htmlString =  "<form name='movieTitlesChoice' id='movieTitlesChoice'>" +
                  "<select class='form-control' id='myMovieTitless'>" +
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

// function showTheaterNames(){
//   var theaterNamesOptions = "";
//   var htmlString ="";
//   for (var i=0; i< theaterNames.length; i++){
//     theaterNamesOptions += "<option>" + theaterNames[i] +"</option>";
//   }
//   htmlString =  "<form name='theaterNamesChoice' id='theaterNamesChoice'>" +
//                   "<select class='form-control' id='mytheaterNames'>" +
//                     theaterNamesOptions +
//                   "</select>" +
//                 "</form>";
//   $("#theater").append(htmlString);
// }

function showTheaterNames(){
  var theaterNamesOptions = "";
  var htmlString ="";
  for (var i=0; i< theaterNames.length; i++){
    theaterNamesOptions += "<option>" + theaterNames[i].name +"</option>";
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

    $("#movie").html("<h3>MOVIES</h3>");
    $("#theater").html("<h3>THEATERS</h3>");
    // $("#about").html("<h3>" + ages[0] +  "</h3>");
    $("#showtimes").html("<h3>SHOWTIMES</h3>");
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

    // var ticket = new Ticket("Jumanji", "7.50", "13.00", "8.00", "");
  });

// Data
//["Jumanji", "Maze Runner", "The Post", "12 Strong", "A Beautiful Planet", "Paddington 2", "Phantom Thread"]
//["CENTURY CLACKAMAS TOWN CENTER", "OAK GROVE 8 CINEMAS", "MORELAND THEATRE", "REGAL HILLTOP 9 CINEMA", "CENTURY 16 EASTPORT PLAZA"];
// var showtimes = ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00"];

film0 = new Movie("Jumanji", "PG", "Welcome to the Jungle", "DESCRIPTION", true, ["CENTURY CLACKAMAS TOWN CENTER", "CENTURY 16 EASTPORT PLAZA", "REGAL HILLTOP 9 CINEMA"] );
movieTitles.push(film0);
film1 = new Movie("Maze Runner", "PG-13", "short desc", "DESCRIPTION", true, ["CENTURY CLACKAMAS TOWN CENTER","CENTURY 16 EASTPORT PLAZA", "REGAL HILLTOP 9 CINEMA"] );
movieTitles.push(film1);
film2 = new Movie("The Post", "R", "short desc", "DESCRIPTION", false, ["CENTURY CLACKAMAS TOWN CENTER","CENTURY 16 EASTPORT PLAZA", "OAK GROVE 8 CINEMAS", "MORELAND THEATRE"] );
movieTitles.push(film2);
film3 = new Movie("A Beautiful Planet", "G", "short desc", "DESCRIPTION", false, ["OMSI IMAX THEATER"] );
movieTitles.push(film3);
film4 = new Movie("Paddington 2", "PG", "short desc", "DESCRIPTION", false, ["CENTURY 16 EASTPORT PLAZA", "OAK GROVE 8 CINEMAS", "MORELAND THEATRE"] );
movieTitles.push(film4);

theater0 = new Theater("CENTURY CLACKAMAS TOWN CENTER", ["Jumanji", "Maze Runner", "The Post"], "123 Four Street, Clackamas, OR 97267", ["12:00", "14:00", "16:00", "18:00", "20:00"], true);
theaterNames.push(theater0);
theater1 = new Theater("OAK GROVE 8 CINEMAS", ["The Post", "Paddington 2"], "456 McLoughlin Blvd, Oak Grove, OR, 97267", ["12:00", "14:00", "16:00", "18:00"], false);
theaterNames.push(theater1);
theater2 = new Theater("MORELAND THEATRE", ["The Post", "Paddington 2"], "1010 West Moreland Blvd., Portland, OR, 97269", ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"], false);
theaterNames.push(theater2);
theater3 = new Theater("REGAL HILLTOP 9 CINEMA", ["Jumanji", "Maze Runner"], "90 Mollala Ave., Oregon City, OR, 97169", ["16:00", "18:00", "20:00", "22:00", "24:00"], false);
theaterNames.push(theater3);
theater4 = new Theater("CENTURY 16 EASTPORT PLAZA", ["Jumanji", "Maze Runner", "The Post", "Paddington 2"], "90 Mollala Ave., Oregon City, OR, 97169", ["16:00", "18:00", "20:00", "22:00", "24:00"], false);
theaterNames.push(theater4);



["CENTURY CLACKAMAS TOWN CENTER", "OAK GROVE 8 CINEMAS", "MORELAND THEATRE", "REGAL HILLTOP 9 CINEMA", "CENTURY 16 EASTPORT PLAZA"]



// this.name = name;
// this.rating = rating;
// this.long = long;
// this.short = short;
// this.newRelease = newRelease;  // boolean
// this.theaters = theaters; // array of Theaters it's playing
