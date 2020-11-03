const express = require('express');
const redis = require("redis");
const client = redis.createClient({
    host: 'redis',
    port: 6379
});

client.auth('password', (a, b, c) => {
    console.log(a, b, c);
});

client.on("error", function(error) {
  console.error(error);
});

client.set("key", "value", redis.print);
client.get("key", redis.print);

const app = express();

app.get('/', async (req, res) => {
    res.send('ok');
});


app.listen(3000, () => {
    console.log('Listening on *:3000');
})