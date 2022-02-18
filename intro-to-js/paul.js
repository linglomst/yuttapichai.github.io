function askMyname() {
    const name = prompt("Please enter you name?");
    if (name != null) {
        document.getElementById("name-tag").innerHTML = "My name is " + name;
    }
}

function helloWorld() {
    const h1message = document.getElementById("name-tag").innerHTML;
    alert(h1message + " ชีวิตยังมีค่าอย่ามาซ่ากับพวกเรา");
}

function calAge() {
    const birthYear = Number(prompt("Please enter your birthyear in AD here"));
    if (birthYear != null) {
        const age = (new Date().getFullYear() - birthYear);
        alert(`สวัสดีปีนี้คุณอายุ ${age} แล้วนะจ๊ะ!`)
    }
}

function loadProfile() {
    const name = "Yuttapichai Paul Linglom";
    const province = "Suratthani";
    document.getElementById('my-name').innerHTML = name;
    document.getElementById('my-province').innerHTML = province;
}