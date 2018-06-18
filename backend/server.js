const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(express.static(__dirname + '/../static'));

app.get('*', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/../static' });
});

app.listen(5555, () => {
    console.log('Server started at:', new Date(), 'on port 5555');
});
