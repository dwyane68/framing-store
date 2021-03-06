import express from 'express';
import bodyParser from 'body-parser';
import fileupload from 'express-fileupload';
import cors from 'cors';
import routes from '../api';
import config from '../config';
import path from 'path';
export default ({ app }: { app: express.Application }) => {

  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.get('/preview/:fileName', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const fileName = req.params.fileName;
    return res.sendFile(path.join(__dirname, '..', 'public', fileName))
  });

  app.enable('trust proxy');
  app.use(cors());
  app.use(fileupload());
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

  // Load API routes
  app.use(config.api.prefix, routes());

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    // err.status = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end();
    }
    return next(err);
  });
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
