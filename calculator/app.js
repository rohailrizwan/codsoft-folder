
var inputnum = document.getElementById("inputnum")
let InputNum = (num) => {
    inputnum.value += num
}

let clearAll = () => {
    inputnum.value = ""
}

let result = () => {
    let currentval = inputnum.value;
    let sign = ["++", "--", "**", "//"];

    for (let i = 0; i < sign.length; i++) {
        if (currentval.includes(sign[i])) {
            alert("Invalid operator");
            clearAll();
            return; 
        }
    }

    let result = eval(currentval);
    inputnum.value = result;
    // console.log(result);
};
function Remove(){
    var currentvalue=inputnum.value
    inputnum.value=currentvalue.slice(0,-1)
}

document.addEventListener("keydown",function(event){

    if (event.key.toLowerCase() === "c"){
        event.preventDefault();
        clearAll()
    }
})

document.addEventListener("keydown",function(event){

    if(event.keyCode === 13){
        event.preventDefault()
        result()
    }
})