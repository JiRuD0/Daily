// 各記事の日付を格納
var article = new String();
const file_path = '../md/outline/';
var path = '../txt/outline.txt';

 fetch(path)
    .then(response => {
        return response.text()
    })
    .then(result => {
        //成功時
        article=result;
/*         alert(article.length); */
        /* for(let i=0;i<article.length;i++){
            
        } */
        load(article);
        
    }) 

function load(string){
    $.ajax({
        url: file_path+string,
        type: "get",
        success : function(data) {
            var md = marked(data);
            $("#container").append(md);
        },
        error:function(data) {
            alert("申し訳ありません。読み込みに失敗しました。");
         }
    })
}

window.addEventListener('DOMContentLoaded',function() {
    $("#header").load('./header.html');
})

/* window.addEventListener('load',function() {
    
    for(let i=0;i<article.length;i++){
        alert(i);
        $.ajax({
            url: file_path+response[i],
            type: "get",
            success : function(data) {
               var md = marked(data);
               $("#container").append(md);
            },
            error:function(data) {
                alert("申し訳ありません。読み込みに失敗しました。");
            }
      })    
    }
    
}) */

/* $('.aURL').click(function(){
    location.href = './article.html?id=' + 1;
}) */
