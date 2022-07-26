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
