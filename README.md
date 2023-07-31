# Game Backlog Tracker
This is my very first full stack web application. Currently, the live version isn't functional as an API I was utilizing has been abandoned, but I intend to switch APIs and refactor soon and the rest of the code is still functional. Users can create an account then compile a list of videos games they would like to play using data from HowLongToBeat.com. The app tracks the total playtime for the entire list and can suggest random games from the user's list.

To run your own instance, add a .env file to the config folder with a DB_CONNECTION_STRING value to connect to a MongoDB shard.

I've gone through a lot of iterations of this project. Initially, I had a version without the MVC architecture or authentication to serve as a prototype. It was very messy and bug ridden, and eventually I started from scratch and developed the app that became this. The frontend is currently EJS templates with Materialize for style. I was initially using vanilla CSS but decided to take the oppurtunity to try a framework. And on the backend I'm using the Express framework for NodeJS, Passport for authentication, and Mongoose to handle my MongoDB database.

Beyond fixing the API, future plans for this app include client side error handling on the signup and login pages, more data on games stored in the list, and I may expiriment with switching from EJS to React for views because I've really enjoyed working in React lately.
