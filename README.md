# Handsontable.com
It's the offical website of [Handsontable](https://github.com/handsontable/handsontable) data grid.  
Go to http://handsontable.com to see it live.

## Install
Before you can build this code, you must install necessary dependencies in your local dev environment:

- [Node.js](http://nodejs.org/)
- [Ruby](http://rubyinstaller.org/)
    - [Compass](http://compass-style.org/) (CSS Authoring Framework)
- [Python](https://www.python.org/)
    - [Pygments](http://pygments.org/) (Syntax highlighter)
- [npm](https://www.npmjs.com/)
- [Git](http://git-scm.com/)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)

As a static site generator we use [Cabin](http://www.cabinjs.com/) with [Jade](http://jade-lang.com/) templates.

## Build
To build Handsontable.com use the following commands:

```
# Clone GitHub repository
git clone "https://github.com/handsontable/handsontable.com"

# Change directory
cd handsontable.com

# Install Node dependencies
npm install

# Install Bower dependencies
bower install

# Build app and run a local webserver
grunt
```

## Access
By default, the app will open port 5455 on your localhost (127.0.0.1) so to access it enter the following URL:

```
http://localhost:5455/
```

## License
This website is published under license [CC BY-ND 4.0](http://creativecommons.org/licenses/by-nd/4.0/). See 
[credits](https://github.com/handsontable/handsontable.com/blob/develop/src/pages/credits.jade) for more details.

## More info
Contact us at [hello@handsontable.com](mailto:hello@handsontable.com)
