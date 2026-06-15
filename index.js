const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from container!',
    version: process.env.APP_VERSION || 'v1',
    hostname: require('os').hostname()
  });
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
