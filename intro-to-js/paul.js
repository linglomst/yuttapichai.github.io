function askMyname() {
    const name = prompt("Please enter you name?");
    if (name != null) {
        document.getElementById("name-tag").innerHTML = "My name is " + name;
    }
}

function helloWorld() {
    const h1message = document.getElementById("name-tag").innerHTML;
    alert(h1message + "ชีวิตยังมีค่าอย่ามาซ่ากับพวกเรา");
}