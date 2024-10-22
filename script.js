const items = document.querySelector(".items");
const container = document.querySelector(".container");
items.addEventListener("click", (event) => {
    if (event.target) {
        var targetAt = event.target.children[1];
        console.log(targetAt.textContent)

        const allProducts = document.querySelectorAll(".product");
        allProducts.forEach(prd => {
            if (prd.className.includes(targetAt.textContent)) {
                prd.style.display = "block";
            }
            else {
                prd.style.display = "none";
            }
        });
    }
});

var state = false;
document.getElementById("search_box").addEventListener("change", (e) => {
    var search_input = e.target.value;

    const allProducts = document.querySelectorAll(".product");
    allProducts.forEach(prd => {
        if (search_input != null) {
            if (prd.className.toLowerCase().includes(search_input.toLowerCase())) {
                prd.style.display = "block";
                state = true;
            }
            else {
                prd.style.display = "none";
            }
        }
        else {
            allProducts.forEach(prd => {
                prd.style.display = "block";
                document.getElementById("error").style.display = "block";
            });
        }
    });
    if (state == true) {
        document.getElementById("error").style.display = "none";
        state = false;
    }
    else {
        document.getElementById("error").style.display = "block";
    }
});
var i=1;
// const change=getElementById("arrow");
const menuItems = document.querySelector(".list");
menuItems.addEventListener("click", (event) => {
           if(i==1){
            window.scrollTo({
                top:0,
                behavior: 'smooth' 
            });
            i=0;
           }
           else{
            window.scrollTo({
                top:1000,
                behavior: 'smooth' 
            });
            i=1;
           }
});
// var i = 1;
// document.getElementById("arrow").addEventListener("click", ()=>{
//     if (i == 1) {
//         window.location. = "main.html#top";
//         i = 0;
//     }
//     else{
//         window.location.href = "main.html#bottom";
//         i = 1;
//     }
// });