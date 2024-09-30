const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;



app.use(express.static(path.join(__dirname, '../../client/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/api`);
});
