// 各記事の日付を格納
var article = new Array()
var path = '../md/outline';
var fs;
var files;
window.addEventListener('DOMContentLoaded',function() {
    alert(path);
    fs = require('fs');
    files = fs.readdirSync(path,{withFileTypes: true});
    alert(files);
})

/* $('.aURL').click(function(){
    location.href = './article.html?id=' + 1;
}) */
