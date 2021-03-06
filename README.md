# Graylog2 Web Interface
[![Build Status](https://travis-ci.org/Graylog2/graylog2-web-interface.png)](https://travis-ci.org/Graylog2/graylog2-web-interface)

## Development Setup

* Make sure Java 7 is installed
* Install [Typesafe Activator](https://typesafe.com/activator) version 1.2.x and ensure the `activator` binary is in `$PATH`

* Run the server

```
$ activator run
[...]

--- (Running the application from SBT, auto-reloading is enabled) ---

[info] play - Listening for HTTP on /0:0:0:0:0:0:0:0:9000

(Server started, use Ctrl+D to stop and go back to the console...)

```

### Javascript

* Install [node.js](http://nodejs.org/) and npm.
* `cd javascript/`
* `npm install`
* `node_modules/.bin/gulp watch`

When using IntelliJ or WebStorm, be sure to enable `JSX harmony` (available in IntelliJ 14 and WebStorm 9)
as JavaScript language version to properly support react templates.

You might get an error message during `npm install` from `gyp` because the installed (default) Python version is too recent (sic!):

```
gyp ERR! stack Error: Python executable "python" is v3.4.2, which is not supported by gyp.                                                                                                                 
```

In this case just set the correct (installed!) Python binary before running `npm install`:

```
npm config set python python2.7
```

