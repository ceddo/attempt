const path = require('path');

module.exports = {
    // entry path
    entry: "./app/assets/scripts/App.js",
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app")
    },
    mode: "development"
};