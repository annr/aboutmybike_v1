
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
DEBUG=express:* npm start

```

That's it! Open http://localhost:3000/ in your favorite browser.

# Notes

##CSS

We currently use Bootstrap 3 compiled with LESS. I'd like to use Bootstrap 4 (which isn't fully ready yet) with SCSS but it wasn't working for me.

To build CSS:
lessc src/less/main.less dist/css/main.css


##SCSS

While we don't use SCSS I left the folder and the base files in the project as a placeholder. We'll switch to SCSS and upgrade to Bootstrap 4 when Bootstrap 4 is better supported.