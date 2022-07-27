// Bài 1
document.getElementById("btnBai1").onclick = function () {
  var contentHTMLtr = "";
  var contentHTMLtd = "";
  var i = 0;
  var j = 0;
  for (i = 0; i < 100; i += 10) {
    for (j = i; j < i + 10; j++) {
      contentHTMLtd += `<td>${j}</td>`;
    }
    contentHTMLtr += `<tr>${contentHTMLtd}</tr>`;
    contentHTMLtd = "";
  }
  document.getElementById("tbKetQuaBai1").innerHTML = contentHTMLtr;
};
//Bài 2
var numArr = [];
document.getElementById("btnAdd").onclick = function () {
  var pushValue = document.getElementById("inputBai2").value * 1;
  numArr.push(pushValue);
  document.getElementById("txtInputBai2").innerHTML = numArr;
};
document.getElementById("btnBai2").onclick = function () {
  var sNumArr = [];
  numArr.forEach(function check(Element) {
    var flag = false;
    for (i = 2; i < Element; i++) {
      if (Element % i == 0) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    if (flag == false) {
      sNumArr.push(Element);
    }
  });
  console.log("sNumArr: ", sNumArr);
  document.getElementById("ketQuaBai2").innerHTML = sNumArr;
};
//Bài 3
document.getElementById("btnBai3").onclick = function () {
  var thamSo = document.getElementById("inputBai3").value * 1;
  var sum = 0;
  for (i = 2; i <= thamSo; i++) {
    sum += i;
  }
  sum += sum * 2;
  document.getElementById("ketQuaBai3").innerHTML = ` Tổng là: ${sum}`;
};
//BÀI 4
document.getElementById("btnBai4").onclick = function () {
  var thamSo = document.getElementById("inputBai4").value * 1;
  var sNumArr = [];
  for (i = 1; i <= thamSo; i++) {
    if (thamSo % i == 0) {
      sNumArr.push(i);
    }
  }
  document.getElementById(
    "ketQuaBai4"
  ).innerHTML = `Ước số của ${thamSo} là: ${sNumArr}`;
};
//BÀI 5
function reversedNum(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}
document.getElementById("btnBai5").onclick = function () {
  var num = document.getElementById("inputBai5").value * 1;
  var reNum = reversedNum(num);
  document.getElementById("ketQuaBai5").innerHTML = reNum;
};
//BÀI 6
document.getElementById("btnBai6").onclick = function () {
  var soX = 0;
  var sum = 0;
  for (i = 0; sum < 100; i++) {
    sum += i;
    soX = i - 1;
  }
  document.getElementById("ketQuaBai6").innerHTML = soX;
};
//BÀI 7
document.getElementById("btnBai7").onclick = function () {
  var soN = document.getElementById("inputBai7").value * 1;
  var contentHTML = "";
  for (i = 0; i <= 10; i++) {
    var multi = soN * i;
    contentHTML += ` ${soN}  *  ${i} =  ${multi} </br>`;
  }
  document.getElementById("ketQuaBai7").innerHTML = contentHTML;
};
var card = [
  "4K",
  "KH",
  "5C",
  "KA",
  "QH",
  "KD",
  "2H",
  "10S",
  "AS",
  "7H",
  "9K",
  "10D",
];
var p = [(p1 = []), (p2 = []), (p3 = []), (p4 = [])];

//BÀI 8
document.getElementById("btnBai8").onclick = function () {
  for (i = 0; i <= 3; i++) {
    var cardGo = card.pop();
    p[i].push(cardGo);
  }
  document.getElementById("ketQuaBai8").innerHTML = p;
};
//BÀI 10
document.getElementById("btnBai10").onclick = function () {
  var gio = document.getElementById("inputGio").value * 1;
  var phut = document.getElementById("inputPhut").value * 1;
  var degGio = 30 * gio;
  var degPhut = 6 * phut;
  var degCore = 0;
  if (degGio > degPhut) {
    degCore = degGio + (phut / 60) * 30 - degPhut;
  }
  if (degGio <= degPhut) {
    degCore = degPhut - (degGio + (phut / 60) * 30);
  }
  document.getElementById("ketQuaBai10").innerHTML = Math.abs(degCore);
};
