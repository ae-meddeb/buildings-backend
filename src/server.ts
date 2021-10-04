import * as express from 'express';
import { Application}  from 'express';
import { investmentRouter } from './router';

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use('/investments', investmentRouter);

app.listen(3000, () => {
  console.log('Server runing on port 3000');
});