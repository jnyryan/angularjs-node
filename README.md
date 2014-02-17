# angularjs-node
A quick start for an angularjs and node project 
This is a simple app that serves up an angular site, retrieves data from a RESTful API 
and allows client side filtering on the data. It uses nodejs, express and angularjs

## View Live Demo

    http://yeoman-angular-quickstart.herokuapp.com/

# Setup

Install nodejs from http://nodejs.org

Download this project and CD to it's directory

``` bash

git clone https://github.com/patchapps/angularjs-node.git
cd angularjs-node.git
```

To install dependencies run the command:

``` bash
  npm install 
```

To start the web server run

``` bash
  node web.js
```

Browse to the application (default is http://localhost:3000)


## Deploy to Heroku

``` bash
git init
git add .
git commit -m "deploy"
heroku create yeoman-angular-quickstart
git push heroku master
heroku ps:scale web=1
heroku open
```

	
