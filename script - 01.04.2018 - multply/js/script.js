var number_input = document.querySelector("#number");
var array_input = document.querySelector("#array");
var result_input = document.querySelector("#result");
var add_button = document.querySelector("#add");
var multiply_button = document.querySelector("#Multiply");
var number = [];

add_button.onclick = function () {
    var number_value = number_input.value;
    if (number_value <= 100) {
        number.push(number_value);
        number_input.value = "";
    }
    else {
        alert("100den kicik reqemleri daxil edin")
    }
    array_input.value = number;
}

multiply_button.onclick = function () {
    sum = 1;
    for (i = 0; i < number.length; i++) {
        sum = sum * number[i];
    }
    result_input.value = sum;
}
