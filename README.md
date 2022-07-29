# Tech-Blog

## Table of Contents

Please use the table of contents to assist you in navigating this README.

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description

The purpose of this project was to create a CMS-style blog site where users can make posts and comment on posts, while they are logged in to the application. I learned how to utilize the Handlebars engine to create the front end for an application based on the Model-View-Controller structure, which creates models with JavaScript and a MySQL database, creates a view using Handlebars.js, and is controlled through routes for the front end and back end and are protected by middleware.

## Installation

Please use the following steps to install the application on your local computer:

Step 1: Access the [Public GitHub Repository](https://github.com/AlexandertheGreat491/Tech-Blog.git) and clone the code to your local computer.

Step 2: In your terminal sign in to your MySQL by running:
mysql -u <your username> -p

Step 3: Enter your MySQL password when prompted and then run this command to create the tech_blog_cms_db database:

source db/schema.sql

Step 4: Then run the command:

npm run seeds

This will create the user, post, and comment tables, as well as add the values to the tables.

Step 4: In your terminal run the command:

npm i

This will create the node_modules folder and give you access to all of the neceassary libraries.

Step 5: Rename the .envEXAMPLE file to .env and fill it in with the correct information.

Step 6: create a .gitignore file and add node_modules and .env to it.

Step 7: In your terminal run npm install -g nodemon, if you don't already have nodemon installed globally.

Step 8: Run the command in your terminal: nodemon

Step 9: Now you can run the app locally.

Step 10: To run the app from Heroku please use the following link: [Tech Blog](https://stark-wildwood-04423.herokuapp.com/)

Step 11: After taking time to understand the applications functionality please fork the repository, clone the forked version, login to Heroku, and create your app. Make sure to link your app to the main branch of your repository. Now you are able to create your own version of the application.

## Usage

After following the installation steps above you will be ready to use the application. Please the screenshot to get an idea of what the application will look like in use.

## Credits

Collaborators:

[Alex Van Dyke](https://github.com/AlexandertheGreat491)

Tutorials:

[Dotenv](https://www.npmjs.com/package/dotenv)

[HTML Color Picker](https://www.w3schools.com/colors/colors_picker.asp)

[Jest](https://jestjs.io/docs/getting-started)

[MySQL Reference Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-reference-guide)

[Nodemon](https://www.npmjs.com/package/nodemon)

[Node.js](https://nodejs.org/api/path.html)

[Pixels to Ems Conversion](https://www.w3schools.com/tags/ref_pxtoemconversion.asp)

[Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

[Sequelize](https://sequelize.org/v5/manual/getting-started.html)

[Sequelize](https://www.npmjs.com/package/sequelize)


## License


[Link to license](./LICENSE)


