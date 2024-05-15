//poll
const http = require('http');
const fs = require('fs');
const port = 3000;

// Function to update the poll results
function updatePollResults(choice) {
    const pollFile = 'poll_results.txt';

    fs.readFile(pollFile, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // If the file does not exist, create it with initial values
                let results = {};
                results[choice] = 1;
                return fs.writeFile(pollFile, JSON.stringify(results), (err) => {
                    if (err) throw err;
                });
            } else {
                throw err;
            }
        }

        // If the file exists, update the poll results
        let results = JSON.parse(data);
        if (results[choice]) {
            results[choice]++;
        } else {
            results[choice] = 1;
        }

        fs.writeFile(pollFile, JSON.stringify(results), (err) => {
            if (err) throw err
