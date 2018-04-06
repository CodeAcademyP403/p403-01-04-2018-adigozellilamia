var number_input = document.querySelector("#number");
var result_input = document.querySelector("#result");
var array_input = document.querySelector("#array");
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
    number.sort();

    result_input.value=number[number.length-1];
    console.log(number);
    console.log(number[number.length-1]);
    console.log(Math.max.apply(null,number));
}
