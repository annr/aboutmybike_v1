
# Setting up the Project

First you'll need [Node.js](https://nodejs.org) and the package manager
that comes with it: [npm](https://www.npmjs.com/).

(You might have these installed already.)

```
which npm
which node
```
To be on the safe side, I'd get Node 6+

Installing npm will probably look something like this:

```
curl -L https://www.npmjs.com/install.sh | sh
```

## Clone the repo

```
git clone https://github.com/annr/aboutmybike.git
cd aboutmybike
npm install
npm install less -g
npm install webpack webpack-dev-server -g
lessc src/less/main.less dist/css/main.css
webpack
npm start

```

That's it! Open http://localhost:8080/ in your favorite browser.

http://localhost:8080/ is for hot-reloaded web development with webpack. With every file change the ES6 code is transpiled to ES5 AND the page is reloaded. This is necessary for speed -- we don't want to add a step to our workflow now that we live in a transpiled world, and we also don't want to be refreshing the brower to look at every change we make.

Any changes to the requested HTML will not appear -- it's just the linked javascript changes that get reloaded. You should be able to add CSS classes to the markup and see the changes but you can't for the time being add to the stylesheets and see the changes. The style sheets are currently manually compiled with the `lessc` command in the setup above.

##Serving files with Express (optional)

Another way to run About My Bike is with the node webserver Express. This is how it with be served on production.  

Express will use the static transpiled files in /dist/ instead of loading them in memory and updating them as Webpack does. Therefore you need to remember to run `webpack` and refresh the browser every time you make a change to the JavaScript when using Express to serve the files.

To serve the app with Express run the command

```
DEBUG=express:* node ./bin/www
```

And go to http://localhost:3000/ (note the different port)


## Setting up the database

A restore.sql file can be found in the root folder of the project and this will generate all the tables of the `amb` database. We may or may not want to have restore.sql create the database as well, but for now we create the database by hand. (It doesn't happen very often that we need to create the database, so we probably won't invest in this work in the short term.)

The restore.sql is updated manually, and because our schema is changing so much these days it is generally always out-of-date.

To create and load the database:
 XXXX (not finished)

This will be changed very soon, but for the next week we'll be using fake data which has been added to the database and then exported as JSON. The inserts for the test data are in the root directory in a file called test-data.sql.


# Notes

##CSS

We currently use Bootstrap 3 compiled with LESS. I'd like to use Bootstrap 4 (which isn't fully ready yet) with SCSS but it wasn't working for me.

To build CSS:
lessc src/less/main.less dist/css/main.css


##SCSS

While we don't use SCSS I left the folder and the base files in the project as a placeholder. We'll switch to SCSS and upgrade to Bootstrap 4 when Bootstrap 4 is better supported.