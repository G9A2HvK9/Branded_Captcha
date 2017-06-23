var express = require('express');
var bodyparser = require('body-parser')
var app = express();
var session = require('express-session');
var getAnswer = require('./assets/antworten')
var Minigames = require('./assets/minigames')

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(session({
  secret: 'anthony',
  resave: true,
  saveUninitialized: true,
}));

app.listen(8080, function(){
  console.log('port is 8080!')
})

app.set('view engine', 'ejs')
app.use('/captchupFiles', express.static('captchupFiles'));
app.use(express.static(__dirname + '/images'));


app.get('/', function(req, res){
  res.redirect('/minigame')
});

app.get('/minigame', function(req, res){
  var captcha = new Minigames().getGame()
  req.session.gameKey = captcha.gameKey;
  res.render(captcha.type, {
    gamedata: captcha.gameData,
  })
});

app.post('/minigame', function(req, res){
  if (getAnswer(req.body.text, req.session.ourNumber)) {
    req.session.authenticate = true
  }else{
    req.session.authenticate = false
  };
  res.redirect('/result')
})

app.get('/area-click', function(req, res){
  var ClickArea = require('./assets/areaClick')
  var captcha = new ClickArea
  req.session.gamekey = captcha.gamekey
  res.render('clickArea', {
    gamedata: captcha.gameData
  });
})

app.post('/area-click', function(req, res){
  clickArea = require('./assets/areaClick.js');
  captcha = new clickArea();
  if(captcha.getSolution([req.session.gamekey , req.body])){
    req.session.authenticate = true
  }else{
    req.session.authenticate = false
  };
  res.redirect('/result')
});

app.get('/img-assoc', function(req, res){
  var ImgAssoc = require('./assets/imgAssoc')
  var captcha = new ImgAssoc

  req.session.gameKey = captcha.gameKey

  res.render('imgAssoc', {
    gamedata: captcha.gameData
  });
});

app.post('/img-assoc', function(req, res){
  var ImgAssoc = require('./assets/imgAssoc')
  var captcha = new ImgAssoc
  if (captcha.checkAnswer(req.session.gameKey, req.body.promptImage)) {
    req.session.authenticate = true
  }else{
    req.session.authenticate = false
  }
  res.redirect('/result')
})

app.get('/result', function(req, res){
  if (req.session.authenticate){
    res.render('confirmed')
    req.session.authenticate = false
  } else {
    res.render('failed')
    req.session.destroy();
  }
})

app.get('/confirmed', function(req, res){
  if (req.session.authenticate){res.render('confirmed')}
  else{res.redirect('/failed')};
})

app.get('/failed', function(req, res){
  res.render('failed')
});


var modalRoutes = require('./routes/modalRoutes')
app.use('/modal', modalRoutes.index);
