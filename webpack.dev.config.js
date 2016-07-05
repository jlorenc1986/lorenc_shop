var path = require('path');

module.exports = {

	entry: {
		app: ["./js/main.js"]
	},

	output: {
		path : path.resolve(__dirname, "build"),
		publicPath : "/public/",
		filename: "bundle.js"
	}

};