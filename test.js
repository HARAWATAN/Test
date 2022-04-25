var a = prompt("名前を入力してください");

var msg = "ようこそ"+a+"さん";
var speed = 350;
var move = 1;

function disp(){
    msg = msg.substring(move, msg.length) + msg.substring(0, move);

    document.form1.field1.value = msg;


    setTimeout("disp()", speed);
}