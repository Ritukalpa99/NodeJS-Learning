# First Steps

## What are Node.js and npm
Node.js is an open source and cross-platform JS runtime environment. It provides a means of writing server side code for applications. \
Build backend environments to communiacate with the databases, collect data and itneract with files using JS.

Node package manager or `npm` is the package manager for Node.js packages. `npm` is bundled and installed automatically with Node.js. 

## Express
It is a minimal, flexible, Node.js application framework. It is used to make building websites, web applications, and APIs, as easy as possible using JS. \
It is used to handle and simplify responses from API requests and supports various templating engines to simplify HTML generation. \
Templating enginges are used to create HTML templates with minimal code and gives the ability to feed variables into the templates.

Express + Node Cycle
<img src="./img/node-outline.png">
The client sends a request to Node server, which then relays that request to Express. Express takes the request and generates the appropriate response with the help from `middleware`, and then sends the response back through the Node server to the client.

## Express Application Generator
Express Application Generator is a package that allows to quickly and easily get a skeleton project with Express up and running. \
It provides several options for the project, including template enginge, adding `gitignore` file.
1. `npm install express-generator`
2. Let's create a project.
    - Name is `testapp`
    - add a `gitignore` file
    - use `handlebar` template enginge
    - `express --git --hbs testapp`
3. cd to directory `testapp`
4. install dependecy by `npm install`
5. run it by `$env:DEBUG='testapp:*';npm start`
6. The command in step 5 may be different. Check docs.

# Express Basics

## Getting started
`ES6` or `ECMAScript 6` is a version of JS which is considered industry standard. \
`babel` is a JS compiler. It translate `ES6` syntax to code to older syntax of JS. \
Some `babel` dev dependencies needed `@babel/core`, `@babel/cli`, `@babel/preset-env` and `@babel/node` \
Need to create a `.babelrc` file have add ``` {"presets": ["@babel/preset-env"]}``` \
`ES6` use module exports (import/exports) and not common JS (require), to enable it, inside `package.json`, add `"type":"module"` \
Scripts are added to make running the code easily, inside `scripts` section of `package.json` file, add `"start" : "nodemon --experimental-json-modules --exec babel-node filename"` 
 - `nodemon` references the nodemon package installed.
 - `--experimental-json-modules` is used to load JSON files.
 - Rest is telling the server to run the project using `babel` and start the application from the `filename`.
 
## Adding data to server
`Mockaroo` is a good site to get data sets for use. \
While using data as a `.json` file, we need to import it as `import data from "./some_data.json" assert { type: "json" };`, without the `assert {type:"json"};` it'd throw an error.

## HTTP methods and routes
Routes determine how an application responds to a client request to a particular endpoint, which is a path and an `HTTP` request method. \
Whenever you visit of `url`, it is a route that has been coded to serve up specific information based on the page and associated `http` methods. 

`HTTP` methods are actions that are taken on a specific resouce,often corresponding to create, read, update, and delete `(CRUD)` operations. \
`GET` retrieves data from the server. \
`POST` sends data to the server and creates a new resource. \
`PUT` Updates an exisiting resource. \
`DELETE` Deletes an exisiting resource. 

`HTTP Messages` : There are 2 messages : \
`Request` : Sent by the client to trigger an action on the server. \
`Response` : Answers from the server. \
Each `http` method take 2 arguments,`path` and `handler`, `handler` is the function that is going to execute once the `path` is found. `app.get('/path',(req,res) => { console.log(req) })` \ 

## postman
Testing the `get` method is easy. Open the browser, go to the route, and the data sent to that route is available. \
Testing other `http` mehods is not the simple. But there is a free tool called `postman` to do the same.

## serve static files
In addition to using `Express` to query and fetch data from APIs, it can also serve static files. Static files, are files that are not going to change. Typically, they are photos, PDFs, documents files, but also include development specific files like `html` and `css`. 

In order to serve static files, use the built-in middleware function `express.static()` that will be passed to `app.use()`. \
`app.use()` is built in with `express` and used to handle `middleware` functions. 
`express.static()` has a few parameters, one of them is the foldername, where static files reside. This file will be served from the root directory, and will reference the file based on its name.

# Express Routing Fundamentals

In order to construct routes in express, we need 2 key components, the path and the method. 
```js
app.get('/animals', (request,response) => {
    response.json(data);
});
```
The path is what defines the end points, in this example `/animals`. \
Method is what defines the action that we're going to take with our end point. In this example, we have `get` method which will retrieve data and provide it to the client. 

## Route Parameters
`Routing parameters` are segments of a `URL` that are used to capture values specified at positions within the `URL`. \
All route paramaters will be transmitted as `strings`.

## Route handlers
Route handlers are blocks of code that handle logic for rotues. This can be in the form of a function, an array of function, or combination of both. 

There are methods that can be incorporated to have multiple callbacks. In order to add additional callbacks, we use the `next()` function. \
`next` is not specific to `node.js` or `express`, it's a 3rd argument that can be passed along the request and response, and it invokes the next `middleware` function in the app.

## Common Response Methods
When creating routes with `express`, various methods are used to handle the response and provide feedback to the client.

`Response Methods` are methods on the `response` object that are responsible for transmitting information to the client. 
- `.json()` - Sends a `JSON` response.
- `.send()` - Sends the `HTTP` response.
- `.download()` - Transfers the file as an attachment.
- `.redirect()` - Redirects the user to the specified path.

## Route Chaining
When creating `routes` with `express`, we have have several routes with the same path, but using different methods.
```js
app.get("/class", (req, res) => {
  res.send("Retrieve class info");
});

app.post("/class", (req, res) => {
  res.send("Create class info");
});

app.put("/class", (req, res) => {
  res.send("Update class info");
});

app.delete("/class", (req, res) => {
  res.send("Delete class info");
});
```
Using `route()` method of `app`, we can chain several methods together to keep code clean and easy to understand. 
```js
app
  .route("class")
  .get((req, res) => {
    res.send("Retrieve class info");
  })
  .post((req, res) => {
    res.send("Create class info");
  })
  .put((req, res) => {
    res.send("Update class info");
  })
  .delete((req, res) => {
    res.send("Delete class info");
  });
```