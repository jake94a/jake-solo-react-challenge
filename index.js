import express from 'express'
import request from 'request'
import cors from 'cors'

const app = express();

app.use(cors());

// .get wants a url then a function
app.get('/', (req, res) => {
  res.send('Hi Mom')
})

app.get('/representatives/:state',
  findRepresentativesByState,
  jsonResponse
);

app.get('/senators/:state',
  findSenatorsByState,
  jsonResponse
);

function findRepresentativesByState(req, res, next) {
  const url = `http://whoismyrepresentative.com/getall_reps_bystate.php?state=${req.params.state}&output=json`;
  request(url, handleApiResponse(res, next));
}

function findSenatorsByState(req, res, next) {
  const url = `http://whoismyrepresentative.com/getall_sens_bystate.php?state=${req.params.state}&output=json`;
  request(url, handleApiResponse(res, next));
}

function handleApiResponse(res, next) {
  return (err, response, body) => {
    if (err || body[0] === '<') {
      res.locals = {
        success: false,
        error: err || 'Invalid request. Please check your state variable.'
      };
      return next();
    }
    res.locals = {
      success: true,
      results: JSON.parse(body).results
    };
    return next();
  };
}

function jsonResponse(req, res, next) {
  return res.json(res.locals);
}

const server = app.listen(3000, () => {
  const host = server.address().address,
    port = server.address().port;

  console.log('API listening at http://%s:%s', host, port);
});
