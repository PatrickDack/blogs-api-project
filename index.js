const express = require('express');
const bodyParser = require('body-parser');
const error = require('./middleware/error');
const userRouter = require('./controller/userController');
const loginRouter = require('./controller/loginRouter');
const loginValidate = require('./service/helpers/loginValidate');
const categoryRouter = require('./controller/categoryController');
const postRouter = require('./controller/postController');
const auth = require('./helpers/auth/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/login', loginValidate, loginRouter);
app.use('/categories', auth, categoryRouter);
app.use('/post', auth, postRouter);

app.use(error);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}!`));
