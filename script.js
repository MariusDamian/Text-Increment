let pd = document.getElementById("pd");
let inputd = document.getElementById("inputd");
let btnd = document.getElementById("btnd");
let asd = 'Test aici';

function adauga() {
     if (inputd.value === "") {
          alert("Please insert text");
     } else {
          pd.innerHTML = "" + inputd.value;
          inputd.value = "";
     }
}

function sterge() {
     pd.innerHTML = "";
}


