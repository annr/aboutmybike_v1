# Example web app built with React and including a simple API

## Clone the repo

```
git clone https://github.com/annr/aboutmybike_v1.git
cd aboutmybike_v1
npm install
npm start-webpack
```
(Make sure webpack is install globally and that you can run webpack-dev-server.)

That's it!

Open http://localhost:8080/ in your favorite browser. You'll see a bicycle photo gallery in a responsive grid view. With every file change the ES6 code is transpiled to ES5 AND the page is reloaded.

(Static sample bikes will appear in a grid view. Later we'll get real app data from another source.)

The React components live in `aboutmybike_v1/src/js/components`.

# CSS development

Styles are not hot-reloaded but instead are manually compiled with the `npm run build-css` command. Develop styles in `aboutmybike_v1/src/scss/`

# Running the Express server

An express web server is also available, and required to avoid cross-domain problems when using the aboutmybike_v1 API.
```
DEBUG=express:* node ./bin/www
```

Open http://localhost:3000/ in your favorite browser.

## Installing Postgres for local development

Download and install the Postgres app: https://postgresapp.com/

Install it by dragging the application icon that is created into the Applications folder on your Mac and then open the app. Click initialize to create a new server, and you can configure your $PATH to use the command line tools (psql, pg_dump). The commands below are from postgresapp.com.

```
sudo mkdir -p /etc/paths.d &&
echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp
```

I use Postico because it's helpful to have a GUI sometimes. https://eggerapps.at/postico/

## Setting up the database

Using "Inialize" with the Postgres app will create a server with your username -- you did this above. When you open the postgres command line it will default to the server generated with the current username, so you'll see something like `ann=# `.

We don't care too much about who will be the owner of the database since it will be used for local dev only.

A restore.sql file can be found in the root folder of the project and this will generate all the tables of the `amb` database. We may or may not want to have restore.sql create the database as well, but for now we create the database by hand. (It doesn't happen very often that we need to create the database, so we probably won't invest in this work in the short term.)

The restore.sql is updated manually, and because our schema is changing so much these days it is generally always out-of-date.

Create the database:

```
createdb -T template0 amb
cd ~/Sites/aboutmybike/db/
psql amb < ./restore.sql
```

This will change, but for now fake data which has been added to the database and then exported as JSON. The inserts for the test data are in aboutmybike_v1/test-data.sql.

```
psql amb < ./test-data.sql
```

## To-do

- [ ] Update React component to use more elegant styles
- [ ] Fix (Update) Router so that there is no # in the URL.
- [ ] Simplify API backend -- do you really need RMDBS?