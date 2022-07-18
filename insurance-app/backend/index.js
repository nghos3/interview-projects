const { response } = require('express');
var express = require('express');
var cors = require('cors')
let app = express();
const data  = require('../api/data.json');

app.use(cors());

//get requests set
app.get('/api/policy/:Policy_id', (req, res) => {
  const policy = data.find( c => c.Policy_id === parseInt(req.params.Policy_id));
  if(!policy) {
    res.status(404).send('bad request!! data unavailable');
  } else {
    res.send(policy);
  }
});

app.get('/api/policy', (req, res) => {
  console.log(req.query.Policy_id);
  // example http://localhost:9000/api/data?Customer_id=420&Premium=1295
   // example http://localhost:9000/api/data?Customer_id=420
  const filters = req.query;
  const filderedPolicies = data.filter(policy => {
    let isValid = true;
    for (key in filters) {
      console.log(key, policy[key], filters[key]);
      isValid = isValid && policy[key] == filters[key];
    }
    return isValid;
  });
  res.send(filderedPolicies);
});

// //new request
// app.post('/api/policy', (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });


const port = 9000;
app.listen(9000, () => console.log(`listening on port ${port}..`));
