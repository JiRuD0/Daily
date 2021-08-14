// 各記事の日付を格納
var article = new Array()
var path = '../md/outline';
window.addEventListener('DOMContentLoaded',function() {
    alert(path);
    var fs = require("fs");
    alert(files);
    var files = fs.readdirSync(path);
    alert(files);
})

/* $('.aURL').click(function(){
    location.href = './article.html?id=' + 1;
}) */
