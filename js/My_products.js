function start(){
    document.getElementById("first").addEventListener("click", function(){ goto("1","1-1")},false);
    document.getElementById("second1").addEventListener("click", function(){goto("2","2-1")},false);
    document.getElementById("second2").addEventListener("click", function(){goto("2","2-2")},false);
    document.getElementById("third1").addEventListener("click", function(){goto("3","3-1")},false);
    document.getElementById("third2").addEventListener("click", function(){goto("3","3-2")},false);
    document.getElementById("fourth1").addEventListener("click", function(){goto("4","4-1")},false);
    document.getElementById("fourth2").addEventListener("click", function(){goto("4","4-2")},false);
    document.getElementById("fifth1").addEventListener("click", function(){goto("5","5-1")},false);
    document.getElementById("fifth2").addEventListener("click", function(){goto("5","5-2")},false);
    document.getElementById("sixth").addEventListener("click", function(){goto("6","6")},false);
    document.getElementById("seventh1").addEventListener("click", function(){goto("7","7-1")},false);
    document.getElementById("seventh2").addEventListener("click", function(){goto("7","7-2")},false);
    document.getElementById("eighth1").addEventListener("click", function(){goto("8","8-1")},false);
    document.getElementById("eighth2").addEventListener("click", function(){goto("8","8-2")},false);
    document.getElementById("ninth1").addEventListener("click", function(){goto("9","9-1")},false);
    document.getElementById("ninth2").addEventListener("click", function(){goto("9","9-2")},false);
}
function goto(x,y){
    window.location.href = `01257013-Exercise${x}/01257013-Exercise${y}.html`;
}
addEventListener("load",start,false);