# Node Globals

## Inspecing the global object
In the browser the global object is called the window. But in NodeJs, the global object is called global. These classes, object and functions are not needed to be imported to use them. They are scoped to the global namespace. \
`console` object is part of global namespace.
```js
console.log('ehy')
// is same as
global.console.log('ehy')
```
The global object in node is `a bit like` the window object in the browser.
```js
let hello = 'hello world from Node.js'

console.log(global.hello); // undefined
```
Now they were exactly the same as the brower object, it should have displayed the string, but it output `undefined` because the variables are scoped to this file or this module. So every new file that we create will have its own scope for variables. \
Nodejs uses chromes's V8 interpretter. \
We can think about the global object as containing all of the objects, values and methods that we can use in a Nodejs file without having to import anything. 

## [Using the require function](./1%20-%20Node%20Globals/3_handling_args_vriable_with_process.argv.js)
`path` module is one of the core modules that's part of Nodejs but in order to use it, we have to import it for us to be able to use all of these functions.
`const path = require('path')` \
```js
for (let key in global) {
    console.log(key);
}
// These are the variable, functions available in the globla object
// global
// clearInterval
// clearTimeout
// setInterval
// setTimeout
// queueMicrotask
// performance
// clearImmediate
// setImmediate
```
## Handling arguments variables with process.argv
One of the important object that's available to us globally is the `process` object. It contains the functionality that allows us to interact with information about the current process instance. \
With process object, we can get environment information, read environment variables, communicate with terminals, and exit the current process. \
```js
console.log(process.argv)
```
In the terminal 
```powershell
node file_name --user Jinn --greeting "hello from node"
```
## Standard input and output
Another feature of `process` object is the standard input and output. These 2 objects offer us a way to communicate with a process while it's running. \
We use `process.stdout.write('hello \n\n')` to output text to terminal. \
To listen to the data events we can add `process.stdin.on('data', function(data) {})` and act accordingly. \
[stdin](./1%20-%20Node%20Globals/4_working_with_standard_input.js) \
[stdout](./1%20-%20Node%20Globals/5_working_with_standard_output.js) \
Standard out and standard input gives us some powerful tools for communication with running a process.

## Timers
In previous part, we used Nodejs asynchronously by using event listeners. Which is instead of just running the functions when they are added to JS file, we call the function only when there's a `data` or `exit` event \
Timers are another way to work asynchronously in Nodejs \
[setTimeout](./1%20-%20Node%20Globals/6_creating_delay_with_setTimeout.js) \
[setInterval](./1%20-%20Node%20Globals/7_incorporating_setInterval.js) \
[progress simulation](./1%20-%20Node%20Globals/8_progress_with_setInterval.js) \
We can use the logic of `progress simulation` to communicate how far along with any asynchronous process

# Node Modules

## Understanding core modules
Some methods of `path` modules
- `path.basename(__filename)` - The name of the current working file
- `path.join(__dirname,"t1","t2")` - Creates path strings

`util` module
- `util.log(path.basename(__filename))` - A bit more information about filename, date and time etc.

`v8` module 
- `v8.getHeapCodeStatistics()` - get information about how much memory app is using. 

## Readline
`readline` is a module that allows us to ask question to our terminal users. It's a wrapper around the standard input, stardard output process that allows us to easily control the user prompt without having to directly work with `stdin` and `stdout`.

```js
// We import the module
const readLine = require('readline');

// We create a variable 'rl', which is going to be a wrapper around stdin and stdout in what's called an interface
// The interface has an input, which maps to process standard input
// and then output is process standard output
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// We'll call rl.question(), it takes a string and a callback function
rl.question("How do you like Node?", (answer) => {
    console.log(`Your answer: ${answer}`);
})
```
[more readline example](./2%20-%20Node%20Modules/3_using%20_readline.js)

## Exporting custom modules
Every JS file is a module. We've been loading modules with `require` function, and the `require` function is part of the common JS module pattern, but it only represents half of the pattern. \
The other half that loads the module, is `module.exports` or the mechanism by which we make our modules consumable.
[exporting module](./2%20-%20Node%20Modules/4_exporting_custom_module.js) \
Modules make our code reusable and consumable because we can publish our modules to NPM and share them with rest of the community.

## Event Emitter
The `event emitter` is NodeJS's implementation of the pub-sub design pattern, and it allows us to create listeners for and emit custom events 
```js
// Require the module
const events = require('events');

// Create an emitter
let emitter = new events.EventEmitter();

// Set up to listen to events
emitter.on('customEvent', (message, user) => {
    console.log(`${user} : ${message}`);
})

// Emit those events
emitter.emit('customEvent', "Hello World", "Computer");
emitter.emit('customEvent', "That's pretty Cool", "Jinn");
```
The `event emitter` is a powerful tool that allows us to decouple logic and handle asynchronicity in JavaScript. \

Example of breaking into modules
- [module provider](./2%20-%20Node%20Modules/6_custom_events_collect_answers.js);
- [module consumer](./2%20-%20Node%20Modules/6_custom_events_ask.js) 

Modules present a great way to separate and reuse code. And the `EventEmitter` presents a way to handle custom events when they are raised. By using both of these tools together with `Readline`, it's pretty cool Nodejs module.

# File Management and Streams
## Listing directory files
Node ships with a module that allows us to interact with the file system. The `fs` module can be used to list files and directories, create files and directories, stream files, change file permissions, and just about anything we'd need to work with files and directories.

```js
const fs = require('fs');

let files = fs.readdirSync('./');
console.log(files);
```
The above code outputs an array of all of the files that are listed in the mentioned directory. \
The function used is called `read dir Sync`. This means that read the contents of the directory synchronously with a blocking request. Meaning, we're blockingthe rest of the process.

## Reading files
Synchronous Way
```js
const fs = require('fs');

let ipsumSync = fs.readFileSync('./readme.md', "utf-8");

console.log(ipsumSync);
```
Asynchronous Way
```js
const fs = require('fs');

fs.readFile('./readme.md', "utf-8", (err, ipsumAsync) => {
    console.log(ipsumAsync);
})
```
W're reading it asynchronously, when the system has finished retrieving the file's contents. The callback is invoked, allowing our main thread to do something else in the meantime.

## Writing and Appending file
`fs.writeFile('./fileName.txt','write this', (err) => {})` \
`fs.appendFileSync('./fileName.txt', 'appended data')` \
Both these have sync and async versions.

## Creating directories
`fs.mkdir()` \
`fs.mkdirSync()` \
`fs.existsSync()`  -> Checks for existence of a directory 
## Renaming and Removing Files
`fs.rename()` \
`fs.unlink()` - Remove files

## Renaming and Removing Directories
`fs.rename() or fs.renameSync()` - can be used for renaming as well as moving the directory \
`fs.rmdir()` -> only async way to be used. Is the directory is not empty, it'll throw an error.

## Writable File Streams
Streams in Nodejs give us a way to asynchronously handle continuous data flows. \
`process.stdout` is but a writable stream, where we send data chunks to it using the right methods \
`process.stdin` is a readable stream. Whenever a data event is raised, we're going to use a callback function and pass data back into the callback. \
Both of these already implement the `stream interface`. \
The problem with normal file reading is that if we're reading a huge file, it's going to create some latency. It a better idea to use a readable stream. Instead of reading an entire file at once, a stream breaks the file down into bits or chunks. \
Readable stream raise data events and pass small chunks of data to the callback. We don't have to wait for the entire file before the first chunk will log. \
[Readable stream code](./3%20-%20File%20Management%20and%20Streams/7_readable_file_streams.js) \
Using streams means that we don't have to wait for the entire file to finish loading before we start reading the data. Streaming video is a perfect example of this. \
When we watch a movie online, we can start watching it before the entire movie is fully donwloaded. That's because we're breaking down our video into chunks that are streamed. So we watch the first part of a movie while the rest of the movie is still being delivered.

## Writable File Streams
Writable Stream is used to write the data chunks that are being read by the readable stream.
[Writable stream](./3%20-%20File%20Management%20and%20Streams/8_writable_file_streams.js)