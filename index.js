var express = require('express');

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended: false});
var app = express();
app.set('view engine', 'ejs');
var obj = {
  title: 'news1',
  id: 4,
  paragr: ['asdsa', 'wwssq', ' 12 33 45', 54]
};
app.use('/public', express.static('public'));
app.get('/', function (req, res) {
  res.render('index');

});
app.get('/news', function (req, res) {
  res.render('newws');
});

app.get('/news/:id', function (req, res) {
res.render('news', {newsId: req.params.id, object: obj});
});
app.get('/about', function (req, res) {
res.render('about');
});
app.post('/about', urlencodedParser, function (req, res) {
  if(!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.render('about');
});
app.listen(3000);
