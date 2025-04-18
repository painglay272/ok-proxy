const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', async (req, res) => {
  const url = 'https://json.vnres.co/matches.json?v=1742323140000';
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    const data = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.type('application/json').send(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(3000, () => {
  console.log('Proxy running on port 3000');
});
