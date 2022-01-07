const express = require('express');
const bodyParser = require('body-parser');
const error = require('./middleware/error');
const userRouter = require('./controller/userController');
const loginRouter = require('./controller/loginRouter');
const loginValidate = require('./service/helpers/loginValidate');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/login', loginValidate, loginRouter);

app.use(error);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}!`));
