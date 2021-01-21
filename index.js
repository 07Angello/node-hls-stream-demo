const express = require('express');
// file system
const fs = require('fs');
const app = express();

app.use( express.static('public') );

app.use( express.json() );

app.listen(4000, () => {
    console.log('Server running on port 4000');
});