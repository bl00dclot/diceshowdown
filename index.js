let randomNumber1 = Math.ceil(Math.random() *6);
document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
let randomNumber2 = Math.ceil(Math.random() *6);
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);
if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "papi 1 dominates";
    } else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "papi 2 is vicious";
    } else {
        document.querySelector("h1").innerHTML = "mm cum again"
    }