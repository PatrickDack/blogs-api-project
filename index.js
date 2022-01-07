const express = require('express');
const bodyParser = require('body-parser');
const error = require('./middleware/error');
const userRouter = require('./controller/userController');
const { User } = require('./models');
const userValidate = require('./service/helpers/userValidate');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/user', userValidate, userRouter);
app.get('/', async (req, res) => {
  const users = await User.findAll();

  res.status(200).json(users);
});

app.use(error);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}!`));
