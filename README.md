# nicholas-griffin-server

[![Greenkeeper badge](https://badges.greenkeeper.io/nicholasgriffintn/NGWebsiteServer.svg?token=dd773cf62e77ed1836793d66d671ffbd3cc20c7431e2883f75649268d7055561&ts=1581260842898)](https://greenkeeper.io/)

## Install and Use

```sh
# cd into project root
$ yarn
# to use mysql
$ yarn add mysql2
# to use postgresql
$ yarn add pg pg-hstore
# start the api
$ yarn start
```

## Folder Structure

- api - for controllers, models, services, etc.
- config - for routes, database, etc.
- db - this is only a dir for the sqlite db, the default for NODE_ENV development
- test - using [Jest](https://github.com/facebook/jest)

## npm scripts

- `yarn dev` - simply start the server withou a watcher
- `yarn create-sqlite-db` - creates the sqlite database
- `yarn drop-sqlite-db` - drops **ONLY** the sqlite database
- `yarn lint` - linting with [eslint](http://eslint.org/)
- `yarn nodemon` - same as `npm start``
- `yarn prepush` - a hook wich runs before pushing to a repository, runs `npm test` and `npm run dropDB`
- `pretest` - runs linting before `npm test`
- `test-ci` - only runs tests, nothing in pretest, nothing in posttest, for better use with ci tools