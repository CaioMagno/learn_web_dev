var makeTabActive = function (tabSelector) {
    "use strict";
    
    $(".tabs span").removeClass("active");
    $(tabSelector).addClass("active");
    $("main .content").empty();
    return false;
};

var configureTabs = function (toDos) {
    "use strict";
    
//    $(".tabs span").toArray().forEach(function (element) {
//        $(element).on("click", makeTabActive(element)); // Não funciona pq makeTabActive é uma chamada de função, e não uma declaração
//    });
    
    $(".tabs span").toArray().forEach(function (element) {
        $(element).on("click", function () {
            $(".tabs span").removeClass("active");
            $(element).addClass("active");
            $("main .content").empty();
            
            if ($(element).parent().is(":nth-child(1)")){
                console.log("A primeira tab foi clicada");
            } else if ($(element).parent().is(":nth-child(2)")) {
                var $content = $("<ul>");
                toDos.forEach(function (toDo){
                    $content.append($("<li>").text(toDo));
                });
                $("main .content").append($content);
            } else if ($(element).parent().is(":nth-child(3)")) {
                console.log("A terceira tab foi clicada");
            }
            
            return false;
        });
    });
};

var main = function () {
    "use strict";
    
    var toDos = [
        "Finish write this book",
        "Take Gracie to the park",
        "Answer emails",
        "Prep for Monday's class",
    ];
    
    configureTabs(toDos);
};

$(document).ready(main);