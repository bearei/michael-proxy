require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const proxy = require('http-proxy-middleware');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use('/:itemId', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, './loader')));

app.use(
  '/api/sizechart',
  proxy({
    target: 'http://18.224.19.41:3010',
    changeOrigin: true
  })
);
app.use(
  '/api/pavs/:itemId',
  proxy({
    target: 'http://18.224.19.41:3010',
    changeOrigin: true
  })
)
app.use(
  '/api/post',
  proxy({
    target: 'http://18.224.19.41:3010',
    changeOrigin: true
  })
)

// app.use(
//   '/reviews/:itemId',
//   proxy({
//     target: 'http://18.188.163.54:3003',
//     changeOrigin: true
//   })
// )
// app.use(
//   '/reviews',
//   proxy({
//     target: 'http://18.188.163.54:3003',
//     changeOrigin: true
//   })
// )


app.use(
  '/products/:itemId',
  proxy({
    target: 'http://18.212.13.97:3001',
    changeOrigin: true
  })
)
app.use(
  '/variants/:itemId',
  proxy({
    target: 'http://18.212.13.97:3001',
    changeOrigin: true
  })
)
app.use(
  '/products/',
  proxy({
    target: 'http://18.212.13.97:3001',
    changeOrigin: true
  })
)


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
