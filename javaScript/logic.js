var allproducts = document.querySelectorAll(".parent .bag");
var div = document.querySelector("#div1")
var price = document.querySelector("#Tprice")
var btn = document.querySelector("#btn1")
var total = 0;
allproducts.forEach(function (item) {
    item.onclick = function () {
        total+= +(item.getAttribute("price"))    // from string to integer  without +() -->string
        div.innerHTML += item.textContent + "  "   //  المحتوى بتاع الليست التانية اللي ضغطت عليها+ لما اضغط عليه هتجيب المحتوى النصي
        // div.innerHTML =item.textContent كان بيبدل القيم ببعض لما اضغط على كل واحد
        if (div.innerHTML != " ")   // if div is not empty
        {
            btn.style. visibility = "visible"; //css
        }
    }
}
)
btn.onclick=function(){
   // console.log(total)   //string 
    document.getElementById("Tprice").innerHTML=total
}

