// 各記事の日付を格納
var article = new Array()
var path = 'https://jirud0.github.io/Daily/md/outline/';
var fs;
var files;
window.addEventListener('DOMContentLoaded',function() {
    fs = require('fs');
    files = fs.readdirSync(path);
    console.log(files);
})

$('.aURL').click(function(){
    location.href = './article.html?id=' + 1;
})
