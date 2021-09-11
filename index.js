const express = require('express')
const app = express();
const path = require('path');

app.use(express.static('./build'));

app.get('/*',(req,res)=>{
    return res.send(process.env.NODE_ENV)
    res.sendFile(path.join(__dirname,'/build/index.html'));
});

app.listen(8080, (err, result) => {
    console.log('Server is running on port 3000');
})