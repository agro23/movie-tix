# Movie-tix

#### _Movie Tickets program, 01/23/18_

#### _**Andy Grossberg_

## Description

_This is the Tuesday Project for Week Four of Intro to Programming at Epicodus_
_The purpose is to simulate a movie ticket purchasing site._

## Location

You can find this file at https://github.com/agro23/movie-tix

## Rules for the Movie Tickets assignment

* Create a webpage where a user can select the name of a movie, the time of day that they would like to see the movie and their age.

* The webpage should let them know how much their movie ticket will cost, based on those three factors.

* Consider that non-"first-release" movies, matinee and senior tickets tend to be cheaper than the regular priced ticket.

* Your constructor and prototype could be called Ticket and you can come up with the formula for determining how the price is calculated depending on the input from the user.

## Methodology

### _The following specs are included in the program:_

* Make basic HTML page template

* Make list of ages in array (< 13, 13-16, >= 17)
  INPUT: none
  OUTPUT: ALERT list of ages

* Make list of movie titles in array
  INPUT: none  
  OUTPUT: ALERT list of movies

* Make list of showtimes in array
  INPUT: none  
  OUTPUT: ALERT list of showtimes

* Make list of theater names in array
  INPUT: none  
  OUTPUT: ALERT list of theater names

* Display List of ages:
  INPUT: Choice of ages <13, 13-16, >=17
  OUTOUT: You have chosen age  ALERT

* Display list of movies
  INPUT: Choice of Movie titles[]
  OUTPUT: You have chosen (movie name)  ALERT

* Display list of showtimes
  INPUT: Choices of showtimes[]
  OUTOUT: Show user's time choice  ALERT

* Display list of Theaters
  INPUT: Choices of theaters[]
  OUTOUT: Show user's theater choice  ALERT

* Check age
  INPUT: age (dropdown menu: <13, 13-16, >=17)
  OUTOUT: Can/Cannot see PG13 or R movies  ALERT

* Create objects:

  * Movie:
    * name
    * rating
    * Long Description
    * Short Description

  * Theater:
    * name
    * list of Movies:
      - (Note Movies here should be another object inheriting Movie properties)
      * movie: array of Movie
        * showtimes
        * passes Boolean
        * first run Boolean
    * Ticket cost calculation method
    * Can user see it? method.

* Create HTML Form for dropdown menus displaying THEATER list, MOVIE list, SHOWTIMES list,  AGE list
  INPUT: Select menu options
  OUTUT: Display selected choice names in an HTML area

* Create Movie panel HTML
  OUTPUT: Movie, Theaters, SHOWTIMES

* Create Theater panel HTML
  OUTPUT: Movie, Theaters, SHOWTIMES

* Require fields in HTML forms?

* Refactor and clean up code

## Setup/Installation Requirements

* Download the files from the repository into appropriately named directories.
* Open the files with the browser of your choice.

## Known Bugs

_There are no known issues at this time. However, the program does not catch non-number input._

## Support and contact details

_You can contact us at:_

* andy.grossberg@gmail.com

## Technologies Used

_Uses HTML, CSS, javascript, and jQuery._

### License

*Distributed under the GPL*

Copyright (c) 2018 **_Andy Grossberg_**
