request = require 'superagent'
request
  .post 'http://188.166.154.219:7777/webhook'
  .send name: 'Manny'
  .set 'Accept', 'application/json'
  .end (err, res) ->
    console.log err
    console.log res
    console.log 'end'
