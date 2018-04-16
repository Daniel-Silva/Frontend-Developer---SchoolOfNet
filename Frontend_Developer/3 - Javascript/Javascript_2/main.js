var click_me = document.getElementById('click_me');
var input   = document.getElementsByClassName('number_val_input');
var btn_generate = document.getElementById('generate_btn');
var body1 = document.getElementsByTagName('body');

var title = document.getElementById('h1');
title.style.color = '#fff000';

var select = document.createElement('select');
select.style.background = '#000000';
body1[0].appendChild(select);

for (var i = 0; i < 10; i++) {
    var option = document.createElement('option');
    option.id = '#id_' + i;
    option.value = i;
    option.innerHTML = i;

    select.appendChild(option);
}

btn_generate.addEventListener('click', generate);

function generate() {
    var value = input[0].value;

    for (var i = 0; i < parseInt(value); i++) {
        var inpt = document.createElement('input');
        inpt.id  = "btn_" + i;

        var body = document.getElementsByTagName('body');

        body[0].appendChild(inpt);
    }

}

click_me.addEventListener('click', fnClickMe);

function fnClickMe() {
    alert('You clicked me')
}

function validateNumber() {
    var number = document.getElementById("number_val").value;

    if (isNaN(number) || (number >= 1 && number <= 10)) {
        alert('input is not valid')
    } else {
        alert('input is valid');
    }
}

function over(obj) {
    obj.innerHTML = "Over me JS";
    obj.style.background = '#ffffff';
}

function out(obj) {
    obj.style.background = '#fff000';
    obj.color = '#ccc';
}











// var ft = [
// 'Leonan',
// 'Luiz'
// ];


// var ft1 = [
//     'Wesley'
// ];


// console.log(ft);
// console.log(ft1);

// var result = ft.concat(ft1);
// console.log(result);

// ft.splice(1, 1);

// console.log(ft.indexOf('Leonan'));

// console.log(ft);

// function myFunction(name) {
//     console.log('Name => ', name);
// }

// (function check(name) {
//     return console.log('Name => ' + name);
// })('Leonan');

// var prop1 = prompt('Model ?')
// var prop2 = prompt('Name ? ')
// var prop3 = prompt('Color ?');

// var obj = {};

// obj["model"] = prop1;
// obj["name"]  = prop2;
// obj["color"] = prop3;
// obj.start = function() {
//     console.log('I m ready')
// }

// console.log(JSON.stringify(obj));
// console.log(obj);

// obj.start();


// function yourName(name) {
//     return name + " School of net";
// }

// console.log(yourName(prop));

// myFunction("Leonan);

// console.log('hello from external script');

// var age = prompt('How old are you ?');

// var ageParser = parseInt(age);

// if (ageParser >= 18) {
//     console.log('You are authorized');
// } else {
//     console.log('You are not authorized');
// }

// var i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// for (var a = 0; a < ageParser; a++) {
//     console.log(a);
// }

// [0, 1, 2, 3, 4, 5, 6].forEach(function(value, key) {
//     console.log(value, key);
// });


// switch (true) {
//     case (ageParser >= 18 ):
//         console.log('You are authorized switch');
//     break;
//     case (ageParser < 18):
//         console.log('You are not authorized switch');
//     break;
//     default:
//         console.log('default function')
//     break;
// }

// var number  = 0;
// var number1 = 1;
// var bool = false;
// var double = 0.0;

// console.log(typeof number);

// number = "0" + number1;

// console.log(number);

// console.log(typeof number);

// var myFunction = function() {
//     var number = 0.1 + 1;

//     console.log(number);
// };

// myFunction();