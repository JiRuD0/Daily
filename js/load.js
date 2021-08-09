function load(){
    var data_ary;
    $.ajax({
          url: "./test.txt",
          type: "get",
          success : function(data) {
              /* data_ary = data.split("\n"); */
              data_ary = data;
             var md = marked(data_ary);
             $("#container").append(md);
          },
          error:function(data) {
              alert("申し訳ありません。読み込みに失敗しました。");
          }
    })    
  //テキスト形式で読み込む
  
             //$(".container").append("bbb".toString());
}
$(function(){
    　　$("#header").load("header.html");
})