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
  var num1 = reversedNum(num);
  document.getElementById("ketQuaBai5").innerHTML = num1;
};
//BÀI 10
document.getElementById("btnBai10").onclick = function () {
  var gio = document.getElementById("inputGio").value * 1;
  var phut = document.getElementById("inputPhut").value * 1;
  var degGio = 30 * gio;
  var degPhut = 6 * phut;
  var degCore = 0;
  if (gio * 5 > phut) {
    degCore = degGio + (phut / 60) * 30 - degPhut;
  }
  if (gio * 5 <= phut) {
    degCore = degPhut - (degGio + (phut / 60) * 30);
  }
  document.getElementById("ketQuaBai10").innerHTML = Math.abs(degCore);
};
