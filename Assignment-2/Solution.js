// 1. Write a function that logs the current file path and directory. (0.5 Grade)
// • Output Example:{File:“/home/user/project/index.js”, Dir:“/home/user/project”}
const path = require('node:path');
let filePath = '/home/user/project/index.js';
let result1 = { File: path.basename(filePath), Dir: path.dirname(filePath) };
console.log(result1);
// 2. Write a function that takes a file path and returns its file name. (0.5 Grade)
// • Input Example: /user/files/report.pdf
// • Output Example:"report.pdf"     
let filePath2 = '/user/files/report.pdf';
console.log(path.basename(filePath2));
// 3. Write a function that builds a path from an object (0.5 Grade)
// • Input Example: { dir: "/folder", name: "app", ext: ".js"}
// • Output Example: “/folder/app.js”
let fileObj = { dir: "\\folder", name: "app", ext: ".js" };
console.log(path.format(fileObj));
// 4. Write a function that returns the file extension from a given file path. (0.5 Grade)
// • Input Example: /docs/readme.md"
// • Output Example: “.md”
let filePath3 = '/docs/readme.md';
console.log(path.extname(filePath3));
// 5. Write a function that parses a given path and returns its name and ext. (0.5 Grade)
// • Input Example: /home/app/main.js
// • Output Example: { Name: “main”, Ext: “.js” }
let filePath4 = '/home/app/main.js';
let parsedPath = path.parse(filePath4);
let result5 = { Name: parsedPath.name, Ext: parsedPath.ext };
console.log(result5);
// 6. Write a function that checks whether a given path is absolute. (0.5 Grade)
// • Input Example: /home/user/file.txt
// • Output Example: true
let filePath5 = '/home/user/file.txt';
console.log(path.isAbsolute(filePath5));
// 7. Write a function that joins multiple segments (0.5 Grade)
// • Input:"src","components", "App.js"
// • Output Example: src/components/App.js
let segments = ['src', 'components', 'App.js'];
console.log(path.join(...segments));
// 8. Write a function that resolves a relative path to an absolute one. (0.5 Grade)
// • Input Example: ./index.js
// • Output Example: /home/user/project/src/index.js
let relativePath = './index.js';
let basePath = '/home/user/project/src';
console.log(path.resolve(basePath, relativePath));
// 9. Write a function that joins two paths. (0.5 Grade)
// • Input Example: /folder1, folder2/file.txt
// • Output Example: /folder1/folder2/file.txt
let path1 = '/folder1';
let path2 = 'folder2/file.txt';
console.log(path.join(path1, path2));
// 10. Write a function that deletes a file asynchronously. (0.5 Grade)
// • Input Example: /path/to/file.txt
// • Output Example: The file.txt is deleted.
let fs = require('node:fs');
let fileToDelete = 'D:\\College\\Route Backend Node.js Course\\Assignments\\Assignment-2\\file.txt';
fs.unlink(fileToDelete, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File deleted successfully.');
    }
});
// 11. Write a function that creates a folder synchronously. (1 Grade)
// • Output Example: “Success”
let dirPath = 'D:\\College\\Route Backend Node.js Course\\Assignments\\Assignment-2\\NewFolder';
try {
    fs.mkdirSync(dirPath);
    console.log('Success');
} catch (err) {
    console.log(error.message);
}
// 12. Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade)
// • Output Example: Welcome event triggered!
let events = require('node:events');
let eventEmitter = new events.EventEmitter();
eventEmitter.on('start', () => {
    console.log('Welcome event triggered!');
});
eventEmitter.emit('start');
// 13. Emit a custom "login" event with a username parameter. (0.5 Grade)
// • Input Example:"Ahmed"
// • Output Example: “User logged in: Ahmed”
eventEmitter.emit('login', 'Ahmed');
eventEmitter.on('login', (username) => {
    console.log(`User logged in: ${username}`);
});
eventEmitter.emit('login', 'Ahmed');
// 14. Read a file synchronously and log its contents. (1 Grade)
// • Input Example:"./notes.txt"
// • Output Example: the file content => “This is a note.”
try {
const data = fs.readFileSync("D:\\College\\Route Backend Node.js Course\\Assignments\\Assignment-2\\notes.txt"); 
console.log(data);
} catch (error) {
console.log(error.message);
}
// 15. Write asynchronously to a file. (1 Grade)
// • Input: path:"./async.txt", content:"Async save"
let fileToWrite = 'D:\\College\\Route Backend Node.js Course\\Assignments\\Assignment-2\\async.txt';
let contentToWrite = 'Async save'; 
fs.writeFileSync(fileToWrite, contentToWrite);
// 16. Check if a directory exists. (0.5 Grade)
// • Input Example: "./notes.txt"
// • Output Example: true
let dirToCheck = 'D:\\College\\Route Backend Node.js Course\\Assignments\\Assignment-2\\notes.txt';
console.log(fs.existsSync(dirToCheck));
// 17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade)
// • Output Example: {Platform: “win32”, Arch: “x64”}
let os = require('node:os');
let result17 = { Platform: os.platform(), Arch: os.arch() };
console.log(result17);