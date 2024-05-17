const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyparser.json());

const port = process.env.PORT || 3000;
const corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions));

// Fmcg section 
const itemRouter = require('./routes/item/itemRoute');

// global 
app.get('/', function (req, res) {
  res.json({
    welcomeNote: 'Welcome to Quantum Rift Lab Infrastructure',
    docUrl: '',
    sourceCode: '' 
  });
});

// Item route section
app.use('/api/v1/items', itemRouter);

app.listen(port, function () {
  console.log('Quantum Rift Lab Infrastructure Server running' + ' ' + port);  
});