const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(5000, () => {
    console.log('the server is running:localhost:5000');
});
 