# Earthy

Earthy is an Etsy inspired website dedicated to making eco-friendly easy to find and purchase.

[Live Link](https://earthy-app.herokuapp.com)

## Features
* Secure backend to frontend User Authentication using BCrypt 

* Products: Users are able to upload a product to the market, as well as edit and remove their created products
  * Images can be uploaded and updated using a drag and drop file uploader
* Shopping Cart: Users Can add products to their Shopping Cart
  * If an item has already been added to the quantity of the item will update
  * Users can edit their shopping cart which will automatically update price totals 
* Reviews: Users can review products as well as edit or delete reviews they have authored
* Search: Users can search for products by product name or seller name 

## Technologies

The backend of the site uses Ruby-'2.5.1' with a Postgres SQL Database.  React.js and Redux were used for front end implementation. In order to help implement particular UI features I utilized react libraries such as 'react-rating', 'react-slider', 'react-moment' and 'react-dropzon'. Amazon Web Services was used to store images uploaded to the application. Heroku was chosen to host the site due to its small size.

## Future Implementation
* Product Categories
  * View products by categories
* Shop creation 
  * All product must be uploaded by shops, created by users
  * Shop Show page
* User Show and Edit pages
* Popular Items on Splash Page 
* Suggested Items on Show Page
* Multiple Image upload on Product Show Page 

## Additional Resources
* [MVP List](https://github.com/elibretti/Earthy/wiki/MVP-List)
* [Backend Routes](https://github.com/elibretti/Earthy/wiki/Backend-Routes)
* [Frontend Routes](https://github.com/elibretti/Earthy/wiki/Frontend-Routes)
* [Sample State](https://github.com/elibretti/Earthy/wiki/Sample-State)
* [Schema](https://github.com/elibretti/Earthy/wiki/Schema)
