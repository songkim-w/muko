const express = require('express');
const app = express();

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.listen(8080, function(){
    console.log('listening on 8080');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/rooms', function(req, res){
    res.render('rooms.ejs');
});

app.get('/about', function(req, res){
    res.render('about.ejs');
});

app.get('/amenities', function(req, res){
    res.render('amenities.ejs');
});
