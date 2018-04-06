var number_input = document.querySelector("#number");
var multiply_button = document.querySelector("#multiply");


multiply_button.onclick = function () {
    var number = number_input.value;
    counter = 1;
    for (i = 1; i <= 10; i++) {
        counter = number * i;
        console.log(number + "*" + i + "=" + counter);
    }

}
