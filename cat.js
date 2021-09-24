const fs = require('fs');

module.exports = function () {
    fs.readFile('./bash.js', (err, data) => {
        if (err) {
            throw err
        } else {
            process.stdout.write(data);
            process.stdout.write("\nprompt > ");
        }
    })



}