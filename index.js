(function() {
  var request;

  request = require('superagent');

  request.post('http://188.166.154.219:7777/webhook').send({
    name: 'Manny'
  }).set('Accept', 'application/json').end(function(err, res) {
    console.log(err);
    console.log(res);
    return console.log('end');
  });

}).call(this);
