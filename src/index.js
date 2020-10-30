const express = require("express");
const cors = require('cors');
const app = express();
const { getImageData } = require("./modules/canvas");


// port infos
const port = process.env.PORT || 8000;

// parser
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

// for documentation and page
app.get("/", (request, response) => {
    response.sendFile(__dirname + "../public/index.html");
});

// for getting the captcha data
app.get("/api/captcha", (req, res) => {
    let data = {
        imgData: getImageData()
    };
    res.json(data);
});


// listen for requests :)
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

