const inputbox = document.getElementById("input-box");
const List = document.getElementById("list-container");

function addTask(){
    if(inputbox.value == ''){
        alert("Please enter the Text. This is mendatory;")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        List.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "<img src='delete.png' width='20px'>";
        li.appendChild(span);
        saveData();
    }
    inputbox.value = '';
}

List.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", List.innerHTML);
}

function showTask(){
    List.innerHTML = localStorage.getItem("data");
}
showTask();