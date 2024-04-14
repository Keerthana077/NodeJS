// import core module
const fs = require('fs')

// fs.writeFile > synchronous version
// fs.writeFileSync > Asynchronous version

// writeFileSync(filename,data)
// fs.writeFileSync('notes.txt','This is the first file')
// If the file doesn't exist,a new file will be created

// fs.writeFileSync('notes.txt','This is the updated text')
// If file exists, the data gets updated.

// fs.appendFileSync(path, data[, options]) 
// Synchronously append data to a file, creating the file if it does not yet exist. data can be a string or a <Buffer>.
// fs.appendFileSync('notes.txt','\nThis content is appended to the file')

// importedthe file
// require('./utils.js')

// const myName = require('./utils.js')
// console.log(myName)

const {myName,add} = require('./utils.js')
console.log(myName)
console.log(add(4,5))

const notes = require('./text.js')
console.log(notes())

// validator - npm i validator
const validator = require('validator')
console.log(validator.isEmail('keerthanaSandeep145@gmail.com')) // true
console.log(validator.isEmail('keerthanaSandeep145@gmailcom')) // false

console.log(validator.isURL('www.google.com')) // true
console.log(validator.isURL('Keerthana')) // false

// chalk - npm i chalk@2.4.1
const chalk = require('chalk')
console.log(chalk.blue('Hello'))
console.log(chalk.bgRed('Hello'))
console.log(chalk.bold('hello'))
console.log(chalk.underline('hello'))
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));