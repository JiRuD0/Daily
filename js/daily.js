// 各記事の日付を格納
var article = new String();
var path = '../txt/outline.txt';
window.addEventListener('DOMContentLoaded',function() {
    fetch(path)
    .then(response => {
        return response.text()
    })
    .then(result => {
        //成功時
        article=result;
        alert(article);
    })
    
})

/* $('.aURL').click(function(){
    location.href = './article.html?id=' + 1;
}) */
