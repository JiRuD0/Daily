function proc() {
    elem = document.getElementById("output");
    elem.innerText = "JavaScriptが実行されました。";
  }

  $(document).ready(function(){
    var target = $("#markdown_content");

    $.ajax({
        url: target[0].attributes["src"].value,
    }).success(function(data){
        target.append(marked(data));
    }).error(function(data){
        target.append("This content failed to load.");
    });
});