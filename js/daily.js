// 各記事の日付を格納
var article = new Array()
var path = '../md/outline';
window.addEventListener('DOMContentLoaded',function() {
    alert(path);
    try{
        var fs = require("fs");
        var files = fs.readdirSync(path);
    }catch(err){
        alert("エラーです");
    }
    
})

/* $('.aURL').click(function(){
    location.href = './article.html?id=' + 1;
}) */
