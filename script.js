// var three_dots = document.getElementsByClassName("three_dots");
var three_dots = document.querySelector(".three_dots");
three_dots.addEventListener("click",function() {
    var task_menu = document.querySelector(".task_menu");
    task_menu.classList.toggle("display_none")
})
console.log(three_dots)
// three_dots.addEventListener("click",function() {
//     var parent = three_dots.parentElement;
//     var inner = document.querySelector(parent + " h3")
//     inner = inner.innerHTML;
//     var cls = document.querySelector(parent + " ." + inner);
//     cls.classList.toggle("display_none")
// })
// three_dots.style.border="2px solid red";
// alert("hi")
var add_task_but = document.querySelector("#add_task_but");
var count = 0;
var three_dots1 = document.getElementsByClassName("three_dots");
add_task_but.addEventListener("click", function(){
    var input = document.querySelector("#given_task").value;
    if (input === ""){
        alert("you cannot add an empty task!!")
    }
    // alert(input)
    var new_div = document.createElement("div");
    var new_div1 = document.createElement("div");
    var new_div1_2 = document.createElement("input");
    var new_div2 = document.createElement("h3");
    var new_div3 = document.createElement("div");
    var new_div4 = document.createElement("div");
    var new_div3_1 = document.createElement("i");
    var new_div4_1 = document.createElement("button");
    var new_div4_2 = document.createElement("button");
    new_div4_2.classList.add("delete_but");
    new_div4_2.innerHTML= "Delete";
    new_div4_1.classList.add("select_but");
    new_div4_1.innerHTML= "Select";
    new_div4.classList.add("task_menu");
    new_div4.classList.add("display_none");
    new_div3_1.classList.add("fa-solid")
    new_div3_1.classList.add("fa-ellipsis-vertical")
    new_div3.classList.add("three_dots");
    new_div2.innerHTML = input ;
    new_div1_2.type = "checkbox";
    // new_div1_2.setAttribute("type", "checkbox");
    new_div1_2.classList.add("checkbox_round")
    new_div1.classList.add("checkbox_main");
    new_div.classList.add("task")
    // new_div.classList.add(input)
    // document.querySelector("."+ input+" h3").innerHTML= input;
    document.querySelector(".tasks").appendChild(new_div);
    new_div.appendChild(new_div1);
    new_div1.appendChild(new_div1_2);
    new_div.appendChild(new_div2);
    new_div.appendChild(new_div3);
    new_div3.appendChild(new_div3_1);
    new_div.appendChild(new_div4);
    new_div4.appendChild(new_div4_1);
    new_div4.appendChild(new_div4_2);
    // input="";
    document.querySelector("#given_task").value = ""
    count++;
    console.log(count)
    console.log(three_dots)
    console.log(three_dots1)
    three_dots1[count].addEventListener("click",function() {
        var task_menu1 = document.getElementsByClassName("task_menu");
        task_menu1[count].classList.toggle("display_none")
        // alert("hi");
    })

})
var checkbox1 = document.querySelector(".checkbox_round")
checkbox1.addEventListener("click",function() {
    var baap = checkbox1.parentElement.nodeName;
    var txt = document.querySelector(baap + " h3");
    // txt.style.textDecoration = "line-through";
    if (checkbox1.checked === true){
        txt.style.textDecoration = "line-through";
        
    }
    else {
        txt.style.textDecoration = "none";

    }
})
// var checkbox1 = document.querySelector(".checkbox_round")
// checkbox1.addEventListener("click",function() {
//     var baap = checkbox1.parentElement.nodeName;
//     var txt = document.querySelector(baap + " h3");
//     txt.style.textDecoration = "line-through";
// })
// alert("hi")
// console.log(count)
// for (let i = 0 ; i < count;i++){
//     console.log(count)
//     alert("");
//     three_dots[i].addEventListener("click",function() {
//         var task_menu = document.querySelector(".task_menu");
//         task_menu.classList.toggle("display_none");
//     })
//     // alert("");
//     console.log(count +1000);

// }
// three_dots.addEventListener("click",function() {
//     var task_menu = document.querySelector(".task_menu");
//     task_menu.classList.toggle("display_none")
// })