const fs = require("fs");
fs.writeFile("./google-cred-heroku.json", process.env.GOOGLE_CONFIG, err => {});
