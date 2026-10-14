const roles = [
    "IT Student",
    "Web Developer",
    "Programmer",
    "UI Designer"
];

let index = 0;

function changeRole(){
    document.getElementById("typing").textContent = roles[index];
    index++;

    if(index >= roles.length){
        index = 0;
    }
}

setInterval(changeRole,2000);