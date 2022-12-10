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