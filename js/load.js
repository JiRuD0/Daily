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
}

function load_Header(header){
    $("#header").load(header);
}