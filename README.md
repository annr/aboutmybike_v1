
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
# note: if you use an ssh key it may be
# `git clone git@github.com:annr/aboutmybike.git`
cd aboutmybike
npm install
npm install webpack webpack-dev-server -g
npm run build-css
webpack
```

`webpack` just compiles the main and vendor JavaScript files, putting them in the dist folder. The webapp main pages -- landing (home) page, upload and detail pages --  may soon be independent of those files, because they are too big, heavy and the app does not require for such state management yet.

```
DEBUG=express:* node ./bin/www
```

Open http://localhost:3000/ in your favorite browser.

You have not populated the database with any bikes so you won't see any on the home page, which is currently a gallery view. You'll do that under "Installing Postgres..." below. The Bootstrap template should be working, however. You'll see a black responsive header bar.

There is no hot-reloading so for, Therefore, when a change is made, the server must be halted, `webpack` run again, and the express server restarted:

```
^C
webpack
DEBUG=express:* node ./bin/www
```

Why no hot-reloading? Because it's not easy to get an Express web server using HMR. It's easier when you have webpack run the web server too. The reason I'm using Express  is so that the API can live within the same webapp. If I recall correctly I did this, not for the convenience, but in order to avoid cross-domain problems.

## Development with hot-reloading

We can still use hot-reloading but note that the compiled files may need to be moved to the root folder -- for what reason I don't recall, but the webpack server had issues with the built files in /dist. Comment out `path: dist` (module.export.output) in /webpack.config.js.

```
npm start
```

Open http://localhost:8080/ in your favorite browser. With every file change the ES6 code is transpiled to ES5 AND the page is reloaded.

The style sheets are currently manually compiled with the `npm run build-css` command in the setup above. Sorry but for now the CSS is not automatically rebuilt with changes.

## Installing Postgres for local development

Download and install the Postgres app: https://postgresapp.com/

Install it by dragging the application icon that is created into the Applications folder on your Mac and then open the app. Click initialize to create a new server, and you can configure your $PATH to use the command line tools (psql, pg_dump). The commands below are from postgresapp.com.

```
sudo mkdir -p /etc/paths.d &&
echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp
```

I use Postico because it's helpful to have a GUI sometimes. https://eggerapps.at/postico/

## Setting up the database

Using "Inialize" with the Postgres app will great a server with your username -- you did this above. When you open the postgres command line it will default to the server generated with the current username, so you'll see something like `ann=# `.

We don't care too much about who will be the owner of the database since it will be used for local dev only.

A restore.sql file can be found in the root folder of the project and this will generate all the tables of the `amb` database. We may or may not want to have restore.sql create the database as well, but for now we create the database by hand. (It doesn't happen very often that we need to create the database, so we probably won't invest in this work in the short term.)

The restore.sql is updated manually, and because our schema is changing so much these days it is generally always out-of-date.

Create the database:

```
createdb -T template0 amb
cd ~/Sites/aboutmybike/db/
psql amb < ./restore.sql
```

This will be changed very soon, but for the next few weeks we'll be using fake data which has been added to the database and then exported as JSON. The inserts for the test data are in the root directory in a file called test-data.sql.

```
psql amb < ./test-data.sql
```

# Notes

## CSS

We upgraded to Bootstrap 4 and Sass recently. On my environment I need to downgrade to Node v4.4.0 in order to build the CSS with SASS. You probably don't have to do this.

```
nvm install v4.4.0
nvm use 4
npm run build-css
```
