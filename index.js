const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
