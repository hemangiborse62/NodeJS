var fs = require('fs');
var writeToFile = process.argv[2];
fs.writeFile('test.txt', writeToFile, function (err) {
    if (err) throw err;
    console.log('The file has been saved!');
});
fs.readFile('test.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
})