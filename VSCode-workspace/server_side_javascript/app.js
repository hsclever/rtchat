/**  Express 실행 */ 
var express = require("express");
var app = express();

app.listen(3000, function(){ // port
    console.log("Connected 3000 port!");
}); 

/** 라우터 */
app.get("/", function(req, res){
    res.send("Hello Home Page");
});

app.get("/login", function(req, res){
    res.send("Login please")
});

app.get("/route", function(req, res){
    res.send("Hello Router, <img src='/route.png'>");
});

/** 정적 파일 */
// 서버를 재구동 하지 않고 바로 적용 할수 있다.
app.use(express.static('public')); // 관습적으로 public 으로 사용 

/** 동적 파일 */
// 서버를 재구동해야 적용된다.
// HTML에 프로그래밍을 추가 할수 있다.(${})
app.get("/dynamic", function(req, res){
    var lis = '';
    for(var i=0; i<5; i++){
        lis = lis + '<li>coding</li>';
    }

    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
            ${lis}
        </ul>
        ${time}
    </body>
    </html>`;

    res.send(output);
});

/** Template 엔진  */
// 정적 파일의 장점과 동적 파일의 장점을 사용
app.set('view engine', 'jade'); // Express 와 Template 엔진을 연결
app.set('views', './views'); // jade 파일 저장 장소(생략해도 엔진은 기본값으로 이 경로를 찾는다)
app.locals.pretty = true; 
app.get('/template', function(req, res){
    res.render('temp', {time: Date(), _title: 'Jade' });
});