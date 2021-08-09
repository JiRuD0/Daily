function load(file){
    var data_ary;
    $.ajax({
          url: file,
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
    var fs = WScript.CreateObject("Scripting.FileSystemObject");
    var file = fs.OpenTextFile("./header.html", 1);
    alert(file);
    if(file==true){
        $("#header").load("./header.html");
        file.close();
    }
    else{
        $("#header").load("../header.html");
    }
})