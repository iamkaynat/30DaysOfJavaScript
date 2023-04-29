let body = document.querySelector("body")
let div = document.querySelector(".number")
let input = document.querySelector("input")
let button = document.querySelector("button")
let message = document.querySelector(".warning-message")

button.addEventListener("click", function () {
    let val = input.value;
    if (typeof Number(val) === "number" && Number(val) > 0) {
        div.innerHTML = " ";
        input.value = " "
        message.innerHTML = "";
        for (let i = 0; i <= val; i++) {
            if (i % 2 == 0) {


                let box = document.createElement("div")


                box.textContent = i
                box.style.width = "80px";
                box.style.height = "60px"
                box.style.margin = "8px";
                box.style.backgroundColor = "green";


                div.appendChild(box)
            }
            else {

                let box = document.createElement("div")
                box.textContent = i
                box.style.width = "80px";
                box.style.height = "60px"
                box.style.backgroundColor = "rgb(236 249 139 / 95%)"
                box.style.margin = "8px";
                if (isPrime(i)) {
                    box.style.backgroundColor = "red";
                }
                else {
                    box.style.backgroundColor = "blue"
                }


                div.appendChild(box)


            }

        }
    }
    else if (val.length === 0) {
        div.innerHTML = "";
        input.value = "";
        message.innerHTML = "";
        message.textContent = "Enter a number to generate numbers.";
        message.style.color = "red";
    }
    else if (typeof val === "string") {
        div.innerHTML = "";
        input.value = "";
        message.innerHTML = "";
        message.textContent = "Enter a number value only.";
        message.style.color = "red";

    }

});






function isPrime(n) {
    // Corner case
    if (n <= 1)
        return false;

    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;

    return true;
}
