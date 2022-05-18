
const express = require('express');
const path = require('path');

const app = express();
const { PORT = 3000 } = process.env;

const distPath = path.join(__dirname, 'dist');

console.log(distPath);


app.use('*', express.static(distPath,
{extensions: ['js', 'css']}));

//app.use('*', express.static(distPath));
// app.get(`/`, (req, res) => {
//   res.status(200).send('Hello, World!');
// });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});