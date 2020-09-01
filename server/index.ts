const express = require('express');
const cors = require('cors');
const request = require('request');
const saveFace = require('./db');

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
}));

app.use(express.static(__dirname + "/../dist/"));

const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect/';
const subscriptionKey = '51911dc408ce4485a8696ea10dbfe1d0';

const port = 3000;

app.post('/', (req, res) => {
  const { imageUrl } = req.body;

  const params = {
    'returnFaceAttributes': 'emotion'
  };

  const options = {
    url: uriBase,
    qs: params,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
  };

request.post(options, (error, response, body) => {
  console.log(body);
  res.setHeader('Content-Type', 'applicatio/json');
  res.send(body);
  if(response.statusCode == "200"){
    saveFace(imageUrl, JSON.stringify(body));
  }
})

});

app.listen(port, () => console.log(`Emojifier back-end listening on port ${port}!`));
