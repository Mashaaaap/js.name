let Pwelcome = document.querySelector("#Pwelcome");
let inputName = document.querySelector("#inputName")
let nameCookies = document.cookie.match(/username(.+?)(;|$)/);
if(nameCookies == null) {
    Pwelcome.innerHTML = "Welcome Stranger!)"
} else {
    let username = nameCookies[1].substring(1);
    Pwelcome.innerHTML = `Welcome ${username}!`
}

inputName.addEventListener('change', () => {
    document.cookie = `username${inputName.value}`;
    Pwelcome.innerHTML = `Welcome ${inputName.value}!`;
})