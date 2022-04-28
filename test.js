var a = prompt("名前を入力してください");
var now = new Date();
var Hour = now.getHours();
if(17 <= Hour || Hour < 5)
{
    var msg = "こんばんは"+a+"さん";
}
else if(Hour <= 5 || Hour < 12)
{
    var msg = "おはようございます"+a+"さん";
}
else if(Hour < 17)
{
    var msg = "こんにちは"+a+"さん";
}
var speed = 350;
var move = 1;

function disp(){
    msg = msg.substring(move, msg.length) + msg.substring(0, move);

    document.form1.field1.value = msg;

    setTimeout("disp()", speed);

}
