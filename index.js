const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send({
        message : 'Hello World'
    })
})

app.listen(3000, (err, result) => {
    console.log('Server is running on port 3000');
})