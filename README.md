# Scrap Chef



[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

[LIVE](https://scrap-chef.herokuapp.com) app

[Server](https://github.com/nomcgill/scrap-chef-server) repo

Scrap Chef is a responsive React App for finding recipes based on ingredients by user-input. Log-in, remain anonymous—it doesn't matter. Simply gather some ingredients into your kitchen and the app will take care of the rest.

![alt text](https://nolanmcgill.files.wordpress.com/2019/09/scrapchefdesktop.png "Scrap Chef Desktop Screenshot")

## What is the Scrap Chef?
The tooltip in the upper-right corner of the app says it all:
> "Trying to put some specific kitchen ingredients to use?
> The Scrap Chef can help! Fill up your virtual
> kitchen here to find what's on your menu."

### Using the App
Logged in or not, a user can use the app. The app is simple in scope: add ingredients using the kitchen component, and the change of Redux state will update the Meals compenent. Within the Meals component is the option to visit the recipe which uses your ingredients. All in all, the user simply manages a username and the ingredients, and the app takes care of the rest. 

### Tech
- React App with component based javascript
- Redux for global storage
- Node.js server to persist usernames with GET, POST, and PUT endpoints
- CSS3 styling and transitions

### Mobile-First Design
![alt text](https://nolanmcgill.files.wordpress.com/2019/09/scrapchefscreenshotmobile2.png "Scrap Chef Mobile Screenshot")
![alt text](https://nolanmcgill.files.wordpress.com/2019/09/scrapchefscreenshotmobile.png "Scrap Chef Mobile Screenshot")

### MongoDB Atlas User Management
The app's username management uses MongoDB atlas with a url-encoded endpoint. The server persists an array of objects for each username, storing only a username and their ingredients.

### Furthermore...
For more information on the app, contact the creator (me) [here](https://nomcgill.github.io/nolan-portfolio/#contact).
