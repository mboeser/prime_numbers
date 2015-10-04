var arr = [];
//var num = document.getElementById("number").value;
//console.log(num);

var num = prompt("Enter a number");

function prime(num) {

    for (var i = 2; i <= num; i++) {
        arr.push(i);
    }

    var no = 0;
    for (var j = 2; j < num; j++) {
        if (num % j === 0) {
            no++;
        }
    }
    return no === 0 ? num : ' ';
}

prime(num);

var x = arr.map(prime).join(' ').replace(/\ +/g, ' ').trim().split(' ');

var list = [];
var m = -1;

(function theLoop() {
    if (m++ >= x.length - 1) return;
    setTimeout(function () {
        list.push(x[m]);
        var n = document.getElementById('i');
        n.innerHTML = list.join(' ');
        theLoop();
    }, 80);
})();

