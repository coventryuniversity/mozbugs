# mozbugs

The aim of mozbugs is to help new Mozilla contributors find the best place to start among the many bugs that are recommended for newbies. With the use of filtering, users will be able to find the right bug for them to work on.

The project was started as an assignment for the Open-Source Development module at [Coventry University](http://www.coventry.ac.uk), and was inspired by [Bugs Ahoy!](https://www.joshmatthews.net/bugsahoy/)

## How to Use

Using the sidebar, expand any of the categories, then select at least one of the sub-category checkboxes to see bugs that are tagged with that sub-category. You can select as many sub-categories as you like. Doing this will only show bugs that are tagged with all these categories. Once you find a bug you are interested in, click on it, and it will take you to Bugzilla@Mozilla to show you more details.

## Getting the Code
Clone SSH:
```sh
$ git clone git@github.com:coventryuniversity/mozbugs.git
```
**or**

Clone HTTP:
```sh
$ git clone https://github.com/coventryuniversity/mozbugs
```

## Installation/Run Locally

Install the dependencies:
```sh
$ npm install
```

Run:

```sh
$ npm start
```

## Tech

mozbugs uses a number of open source projects to work properly:

* [Typescript] - TypeScript is a superset of JavaScript that compiles to clean JavaScript output
* [Ant Design] - An enterprise class UI design language and React-based implementation
* [React] - JavaScript library providing a view for data rendered as HTML

## Todo

 - Add Code Comments
 - Write tests

## Authors

 - Benjamin Bogdanovic
 - Philipp Beck

## Special Thanks

 - Carey Pridgeon

## License

mozbugs is [MIT licensed](./LICENSE).
